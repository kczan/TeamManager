# pull official base image
FROM python:3.6.9-slim-buster

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

ENV TEAM_MANAGER_SECRET_KEY "az%x=$dqwg*_wsc4_*q*7lo0u1(5q)thgbs7^qasyw%(90l7)o"
ENV DEBUG 0


# install environment dependencies
RUN pip3 install --upgrade pip 


# copy project
COPY . .

# Install project dependencies

RUN pip install -r requirements.txt --no-dependencies


CMD gunicorn TeamManager.wsgi:application --bind 0.0.0.0:8000

