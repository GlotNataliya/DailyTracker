# DailyTracker

DailyTracker is a simple and effective app for improving team productivity

## Requirements

![Ruby](https://img.shields.io/badge/-Ruby-e74c3c?style=for-the-badge&logo=ruby&logoColor=b71540)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?style=for-the-badge&logo=PostgreSQL&logoColor=ffffff)
![Ruby on Rails](https://img.shields.io/badge/-Ruby_on_rails-b71540?style=for-the-badge&logo=ruby-on-rails&logoColor=f1f2f6)
![React.js](https://img.shields.io/badge/-React-2d98da?style=for-the-badge&logo=React&logoColor=1e272e)
- Ruby version 2.7.1
- Rails version 6.0.3.4
- PostgreSQL 9.2 and later

## Install

```ruby
git clone
bundle install
yarn install
```

## System dependencies

## Configuration
- create .env file in the project root directory
- Put this string in the .env-file and replace 'user' and 'password':
```
export DATABASE_URL="postgresql://user:password@localhost/?pool=5&encoding=unicode&timeout=5000"
```
- Put mailer settings in the .env-file:
```
export SENDMAIL_PASSWORD=...
export SENDMAIL_USERNAME=...
export MAIL_HOST=...
export SMTP_HOST=...
export SMTP_PORT=...
```
## Database creation

`rails db:create`

`rails db:migrate`

## Database initialization

`rails db:seed`

## How to run the test suite

`rails spec`

## Services (job queues, cache servers, search engines, etc.)
