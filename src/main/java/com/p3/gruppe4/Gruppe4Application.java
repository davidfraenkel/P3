package com.p3.gruppe4;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.p3.gruppe4.DatabaseCollections.UserCollection;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Gruppe4Application {

	public static void main(String[] args) {
		// Database setup
		String connectionString = "mongodb+srv://pepperonis:ilovepepperonis321@p3gastrome.as1pjv9.mongodb.net/?retryWrites=true&w=majority";

        MongoClient client = MongoClients.create(connectionString);

        MongoDatabase dataBase = client.getDatabase("Gastrome");
		MongoCollection<UserCollection> usersCollection = dataBase.getCollection("Users", UserCollection.class);

		System.out.println(dataBase);

		// Spring Boot run
		SpringApplication.run(Gruppe4Application.class, args);
	}

}
