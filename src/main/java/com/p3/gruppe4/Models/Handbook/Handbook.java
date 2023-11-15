package com.p3.gruppe4.Models.Handbook;

import static com.mongodb.client.model.Filters.eq;

import com.mongodb.MongoException;
import com.mongodb.client.*;
import org.bson.Document;
import org.bson.types.ObjectId;

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

    public Document createTopic(Topic topic) {
        Document returnDocument = new Document();
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");

            MongoCollection<Document> collection = db.getCollection("Topic");
            returnDocument = new Document()
                    .append("_id", topic.getId().toString())
                    .append("name", topic.getName())
                    .append("imagePath", topic.getImagePath());
            collection.insertOne(returnDocument);
            // Prints a message if any exceptions occur during the operation
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
        return returnDocument;
    }

    public Document editTopic(String topicId, Topic topic){
        Document returnDoc = new Document();
        try (MongoClient mongoClient = MongoClients.create(this.connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Topic");

            Document oldDoc = collection.find(eq("_id", topicId))
                    .first();

            collection.updateOne(new Document().append("_id",  topicId),
                    new Document("$set", new Document()
                            .append("name", !topic.getName().isEmpty() ? topic.getName() : oldDoc.getString("name"))
                            .append("imagePath", !topic.getImagePath().isEmpty() ? topic.getImagePath() : oldDoc.getString("imagePath"))
                    ));
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
        return returnDoc;
    }
}
