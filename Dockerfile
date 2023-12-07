# Stage 1: Build the application
FROM maven:3.8-openjdk-17 as build
WORKDIR /app
COPY pom.xml .
COPY src ./src
# Build the application
RUN mvn clean package -DskipTests

# Stage 2: Setup the image with Java Runtime
FROM openjdk:17-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]

# run 'docker build -t p3 .'
# docker run -d --name my-p3-container -p 3004:3002 p3
# docker exec -it my-p3-container /bin/sh