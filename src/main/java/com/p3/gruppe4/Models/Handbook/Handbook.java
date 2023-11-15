package com.p3.gruppe4.Models.Handbook;

import static com.mongodb.client.model.Filters.eq;

import com.mongodb.MongoException;
import com.mongodb.client.*;
import com.mongodb.client.model.Projections;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;

import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class Handbook {
    private String connectionString = "mongodb+srv://pepperonis:ilovepepperonis321@p3gastrome.as1pjv9.mongodb.net/?retryWrites=true&w=majority\n";
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
        Document returnDocument = new Document();
        try (MongoClient mongoClient = MongoClients.create(this.connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Topic");

            Document newDocument = new Document().append("_id", topic.getId());
            if (!topic.getName().isEmpty()){
                newDocument.append("name", topic.getName());
            }
            if (!topic.getImagePath().isEmpty()){
                newDocument.append("imagePath", topic.getImagePath());
            }
            returnDocument = newDocument;

//            collection.updateOne(new)

            // Prints a message if any exceptions occur during the operation
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
        return returnDocument;
    }

    public void manageTopic(){
//        switch (operation){
//            case CREATE:
//                System.out.println("CREATE");
//                break;
//            case DELETE:
//                System.out.println("DELETE");
//                break;
//            case EDIT:
//                System.out.println("EDIT");
//                break;
//        }
        System.out.println("Unfinished");
    }

    public void manageSubTopic(){
        System.out.println("Unfinished");
    }
}
