FROM ruby:3.2.2

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

WORKDIR /weather_app

COPY Gemfile /weather_app/Gemfile
COPY Gemfile.lock /weather_app/Gemfile.lock
RUN bundle install

COPY . /weather_app
