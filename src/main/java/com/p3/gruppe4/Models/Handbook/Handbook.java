package com.p3.gruppe4.Models.Handbook;

import static com.mongodb.client.model.Filters.eq;

import com.mongodb.MongoException;
import com.mongodb.client.*;
import com.mongodb.client.model.UpdateOptions;
import com.mongodb.client.model.Updates;
import com.mongodb.client.result.UpdateResult;
import org.bson.Document;
import org.bson.conversions.Bson;

import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;

public class Handbook {
    private String connectionString = "mongodb+srv://pepperonis:ilovepepperonis321@p3gastrome.as1pjv9.mongodb.net/?retryWrites=true&w=majority";
    public Handbook (){
        System.out.println("Handbook created");
    }
    public HashSet<Document> getAllTopics(){
        HashSet<Document> returnSet = new HashSet<>(Collections.emptySet());
        try (MongoClient mongoClient = MongoClients.create(this.connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Topic");

            FindIterable<Document> iterableCollection = collection.find();
            Iterator iterator = iterableCollection.iterator();

            while (iterator.hasNext()) {
                returnSet.add((Document) iterator.next());
            }
            // Prints a message if any exceptions occur during the operation
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
        return returnSet;
    }

    public Document getTopic(String id){
        Document returnDocument = new Document();
        try (MongoClient mongoClient = MongoClients.create(this.connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Topic");

            returnDocument = collection.find(eq("_id", id))
                    .first();
            // Prints a message if any exceptions occur during the operation
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
        return returnDocument;
    }

    public void createTopic(Topic topic) {
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");

            MongoCollection<Document> collection = db.getCollection("Topic");
            collection.insertOne(new Document()
                    .append("_id", topic.getId().toString())
                    .append("name", topic.getName())
                    .append("imagePath", topic.getImagePath())
            );

            // Prints a message if any exceptions occur during the operation
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
    }

    public Document editTopic(Topic topic){
        Document returnDoc = new Document();
        try (MongoClient mongoClient = MongoClients.create(this.connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Topic");

            Document oldDoc = collection.find(eq("_id", topic.getId()))
                    .first();

            String name = !topic.getName().isEmpty() ? topic.getName() : oldDoc.getString("name");
            String imagePath = !topic.getImagePath().isEmpty() ? topic.getImagePath() : oldDoc.getString("imagePath");


            Document query = new Document().append("_id",  topic.getId());
            // Creates instructions to update the values of three document fields
            Bson updates = Updates.combine(
                    Updates.set("name", name),
                    Updates.set("imagePath", imagePath));
                    // Instructs the driver to insert a new document if none match the query
            try {
                // Updates the first document that has an "id" value of the found topic's id
                 UpdateResult result = collection.updateOne(query, updates, new UpdateOptions().upsert(true));
                // Prints the number of updated documents and the upserted document ID, if an upsert was performed
                System.out.println("Modified document count: " + result.getModifiedCount());
                System.out.println("Upserted id: " + result.getUpsertedId());

                // Prints a message if any exceptions occur during the operation
            } catch (MongoException me) {
                System.err.println("Unable to update due to an error: " + me);
            }
            // Prints a message if any exceptions occur during the operation
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
        return returnDoc;
    }

}
