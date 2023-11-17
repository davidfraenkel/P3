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
- `POST /login ` - Returns true if user and password are correct
