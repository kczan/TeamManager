import random
import json


def get_random_emp_values():
    first_name_list = ['John', 'Kate', 'Sylvia', 'Eva', 'Jenna',
                       'Frank', 'Carl', 'Jade', 'Stanley', 'Mark', 'Jake', 'Beth']
    last_name_list = ['Smith', 'Bishop', 'Wayne', 'Martinez', 'Grant', 'Elwood',
                      'Woodgate', 'Kennedy', 'Johnson', 'Williams', 'Brown', 'Miller', 'Jones']
    department_list = ['Sales', 'HR', 'Management', 'Quality Assurance',
                       'Client Service', 'Accounting', 'Purchase', 'Logistic']
    position_list = ['Intern', 'Junior Specialist',
                     'Specialist', 'Senior Specialist']
    salary = random.randrange(7, 20) * 10000
    contact_number = random.randrange(1000000000, 9999999999)

    employee = {
        "first_name": random.choice(first_name_list),
        "last_name": random.choice(last_name_list),
        "department": random.choice(department_list),
        "position": random.choice(position_list),
        "salary": salary,
        "contact_number": contact_number
    }

    return employee
