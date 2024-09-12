# P3

# Docker Setup
- Download Docket Desktop
- Clone this repo
- Open a terminal in the root of the repo
- Run `docker-compose up --build`


### Docker (Single file)
- run 'docker build -t p3 .'
- docker run -d --name my-p3-container -p 3004:3002 p3
- docker exec -it my-p3-container /bin/sh


## Backend Calls
All backend calls are made to the following url: `/api/`
### Handbook
- `GET /getAllTopics` - Returns all topics
- `GET /getTopicByName` - Returns a topic by name
- `POST /createTopic` - Creates a topic

### User
- `POST /login ` - Returns true if user and password are correct provided a `username and password`
- `POST /signup` - Creates a user provided a ``username, password, email, lastname and phonenumber``
- `POST /editUser` - Edits a user provided a change happende to `username, password, email, lastname and phonenumber`
- `POST /deleteUser` - Deletes a user provided a `username`
