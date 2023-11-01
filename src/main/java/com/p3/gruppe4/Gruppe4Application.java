package com.p3.gruppe4;

import com.mongodb.MongoException;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.result.InsertOneResult;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

import static com.mongodb.client.model.Filters.eq;

@SpringBootApplication
public class Gruppe4Application {

	public static void main(String[] args) {
		// Database setup
		String connectionString = "mongodb+srv://pepperonis:ilovepepperonis321@p3gastrome.as1pjv9.mongodb.net/?retryWrites=true&w=majority";

		try (MongoClient mongoClient = MongoClients.create(connectionString)) {
			MongoDatabase database = mongoClient.getDatabase("Gastrome");
			MongoCollection<Document> collection = database.getCollection("Users");
			try {
				// Inserts a sample document describing a movie into the collection
				System.out.println("Tries");
				InsertOneResult result = collection.insertOne(new Document()
						.append("_id", new ObjectId())
						.append("title", "Ski Bloopers")
						.append("genres", Arrays.asList("Documentary", "Comedy")));
				// Prints the ID of the inserted document
				System.out.println("Success! Inserted document id: " + result.getInsertedId());

				// Prints a message if any exceptions occur during the operation
			} catch (MongoException me) {
				System.out.println("fails");
				System.err.println("Unable to insert due to an error: " + me);
			}
		}
//
//        MongoClient client = MongoClients.create(connectionString);
//        MongoDatabase dataBase = client.getDatabase("Gastrome");
//		MongoCollection<Document> usersCollection = dataBase.getCollection("Users", Document.class);
//		System.out.println("Line 25");
//		Document doc = usersCollection.find(eq("name", "Lars2")).first();
//		System.out.println(doc.toJson());
//		InsertOneResult result = usersCollection.insertOne(new Document()
//				.append("_id", new ObjectId())
//				.append("name", "Lars")
//		);

		// Spring Boot run
		SpringApplication.run(Gruppe4Application.class, args);
	}

}
