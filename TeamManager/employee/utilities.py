import random
import json


def get_random_emp_values():
    first_name_list = ['John', 'Kate', 'Sylvia', 'Eva', 'Jenna',
                       'Frank', 'Carl', 'Jade', 'Stanley', 'Mark', 'Jake', 'Beth', 'Kevin', 'Abigail', 'Brock', 'Shelly', 'Max', 'Oscar', 'Kelly', 'Rachel', 'Esther', 'Wayne', 'Ken']
    last_name_list = ['Smith', 'Bishop', 'Wayne', 'Martinez', 'Grant', 'Elwood',
                      'Woodgate', 'Kennedy', 'Johnson', 'Williams', 'Brown', 'Miller', 'Jones', 'Jean', 'Novak', 'Green', 'Ford', 'Young', 'Adams', 'King', 'Gonzalez', 'Carter', 'Perez', 'White', 'Thompson', 'Anderson']
    department_list = ['Sales', 'HR', 'Management', 'Quality Assurance',
                       'Client Service', 'Accounting', 'Purchase', 'Logistic']
    position_list = ['Intern', 'Junior Specialist',
                     'Specialist', 'Senior Specialist']

    first_name = random.choice(first_name_list)
    last_name = random.choice(last_name_list)
    department = random.choice(department_list)
    position = random.choice(position_list)

    min_range = 7
    max_range = 25

    if position == 'Intern':
        min_range = 4
        max_range = 8
    elif position == 'Junior Specialist':
        min_range = 7
        max_range = 12
    elif position == 'Specialist':
        min_range = 10
        max_range = 15
    elif position == 'Senior Specialist':
        min_range = 14
        max_range = 25

    salary = random.randrange(min_range, max_range) * 10000

    contact_number = random.randrange(1000000000, 9999999999)

    employee = {
        "first_name": first_name,
        "last_name": last_name,
        "department": department,
        "position": position,
        "salary": salary,
        "contact_number": contact_number
    }
    return employee
