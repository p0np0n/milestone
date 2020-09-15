# Milestone Project

## Get rid of warning

`RUBYOPT='-W:no-deprecated -W:no-experimental' bin/rails s`

# How to use Docker-Compose like a Pro..

First step start the runner service for prepairing project dependencies

by usging **docker run** command

`docker run --rm runner`

after run the comand you will access to container and able to use rails commands

then follow these step.

- `bundle # To install bundle`
- `yarn # Install yarn`
- `rails db:migrate`

now you will able to start rails server by run this command.
`dokcer-compose up -d rails`

## Other available services.

#### Sidekiq
`docker-compose up sidekiq`
