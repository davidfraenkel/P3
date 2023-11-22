package com.p3.gruppe4.Models.Handbook;


import static com.mongodb.client.model.Filters.eq;

import com.mongodb.MongoException;
import com.mongodb.client.*;
import com.p3.gruppe4.Models.DatabaseOperator;
import org.bson.Document;


import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;

public class Handbook extends DatabaseOperator { //TODO: Make abstract class and have the constructor take a mongo database so we can mock up db for test
    public Handbook (){
        super();
    }

//  TOPIC OPERATIONS
    public HashSet<Document> getAllTopics(){
        HashSet<Document> returnSet = new HashSet<>(Collections.emptySet());
        try {
            MongoCollection<Document> collection = this.database.getCollection("Topic");

            FindIterable<Document> iterableCollection = collection.find();
            Iterator<Document> iterator = iterableCollection.iterator();

            while (iterator.hasNext()) {
                returnSet.add(iterator.next());
            }
        } catch (MongoException me) {
            System.err.println("Exeption: " + me);
        }
        return returnSet;
    }
//
//    public Document getTopic(String id){
//        Document returnDocument = new Document();
//        try (MongoClient mongoClient = MongoClients.create(this.connectionString)) {
//            MongoDatabase db = mongoClient.getDatabase("Gastrome");
//            MongoCollection<Document> collection = db.getCollection("Topic");
//
//            returnDocument = collection.find(eq("_id", id))
//                    .first();
//            // Prints a message if any exceptions occur during the operation
//        } catch (MongoException me) {
//            System.err.println("Unable to insert due to an error: " + me);
//        }
//        return returnDocument;
//    }
//
//    public Document createTopic(Topic topic, MultipartFile file) {
//        Document returnDocument = new Document();
//        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
//            MongoDatabase db = mongoClient.getDatabase("Gastrome");
//
//            MongoCollection<Document> collection = db.getCollection("Topic");
//            returnDocument = new Document()
//                    .append("_id", topic.getId().toString())
//                    .append("name", topic.getName())
//                    .append("imagePath", topic.getImagePath());
//            collection.insertOne(returnDocument);
//
//            SaveFile saveFile = new SaveFile();
//            saveFile.store(file);
//
//
//            // Prints a message if any exceptions occur during the operation
//        } catch (MongoException me) {
//                System.err.println("Unable to insert due to an error: " + me);
//        }
//        return returnDocument;
//    }
//
//    public Document editTopic(String topicId, Topic topic){
//        Document returnDoc = new Document();
//        try (MongoClient mongoClient = MongoClients.create(this.connectionString)) {
//            MongoDatabase db = mongoClient.getDatabase("Gastrome");
//            MongoCollection<Document> collection = db.getCollection("Topic");
//
//            Document oldDoc = collection.find(eq("_id", topicId))
//                    .first();
//
//            returnDoc = new Document("$set", new Document()
//                    .append("name", topic.getName().isEmpty() ? oldDoc.getString("name") : topic.getName())
//                    .append("imagePath", !topic.getImagePath().isEmpty() ? topic.getImagePath() : oldDoc.getString("imagePath"))
//            );
//
//            collection.updateOne(new Document().append("_id",  topicId), returnDoc);
//        } catch (MongoException me) {
//            System.err.println("Unable to insert due to an error: " + me);
//        }
//        return returnDoc;
//    }
//
//    public String deleteTopic(String topicId){
//        String returnString = "deletion failed";
//        try (MongoClient mongoClient = MongoClients.create(this.connectionString)) {
//            MongoDatabase db = mongoClient.getDatabase("Gastrome");
//            MongoCollection<Document> collection = db.getCollection("Topic");
//
//            collection.deleteOne(new Document().append("_id",  topicId));
//            returnString = "Topic deleted successfully";
//        } catch (MongoException me) {
//            System.err.println("Unable to insert due to an error: " + me);
//        }
//        return returnString;
//    }
//
//
////  SUBTOPIC OPERATIONS
//    public HashSet<Document> getAllSubTopics(String parentId){
//        HashSet<Document> returnSet = new HashSet<>(Collections.emptySet());
//        try (MongoClient mongoClient = MongoClients.create(this.connectionString)) {
//            MongoDatabase db = mongoClient.getDatabase("Gastrome");
//            MongoCollection<Document> collection = db.getCollection("SubTopic");
//
//            Document query = new Document().append("parentTopicId", parentId);
//
//            MongoCursor<Document> cursor = collection.find(query).iterator();
//
//            while (cursor.hasNext()){
//                returnSet.add(cursor.next());
//            }
//            // Prints a message if any exceptions occur during the operation
//        } catch (MongoException me) {
//            System.err.println("Unable to insert due to an error: " + me);
//        }
//        return returnSet;
//    }
//
//    public Document getSubTopic(String id){
//        Document returnDocument = new Document();
//        try (MongoClient mongoClient = MongoClients.create(this.connectionString)) {
//            MongoDatabase db = mongoClient.getDatabase("Gastrome");
//            MongoCollection<Document> collection = db.getCollection("SubTopic");
//
//            returnDocument = collection.find(eq("_id", id))
//                    .first();
//
//            // Prints a message if any exceptions occur during the operation
//        } catch (MongoException me) {
//            System.err.println("Unable to insert due to an error: " + me);
//        }
//        return returnDocument;
//    }
//
//    public Document createSubTopic(SubTopic subTopic, String parentId){
//        Document returnDocument = new Document();
//        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
//            MongoDatabase db = mongoClient.getDatabase("Gastrome");
//
//            MongoCollection<Document> collection = db.getCollection("SubTopic");
//            returnDocument = new Document()
//                    .append("_id", subTopic.getId().toString())
//                    .append("name", subTopic.getName())
//                    .append("imagePath", parentId)
//                    .append("parentId", subTopic.getParentId())
//                    .append("content", subTopic.getContent());
//            collection.insertOne(returnDocument);
//            // Prints a message if any exceptions occur during the operation
//        } catch (MongoException me) {
//            System.err.println("Unable to insert due to an error: " + me);
//        }
//        return returnDocument;
//    }
//
//    public Document editSubTopic(SubTopic subTopic, String subTopicId){
//        Document returnDoc = new Document();
//        try (MongoClient mongoClient = MongoClients.create(this.connectionString)) {
//            MongoDatabase db = mongoClient.getDatabase("Gastrome");
//            MongoCollection<Document> collection = db.getCollection("SubTopic");
//
//            Document oldDoc = collection.find(eq("_id", subTopicId))
//                    .first();
//
//            returnDoc = new Document("$set", new Document()
//                    .append("name", !subTopic.getName().isEmpty() ? subTopic.getName() : oldDoc.getString("name"))
//                    .append("imagePath", !subTopic.getImagePath().isEmpty() ? subTopic.getImagePath() : oldDoc.getString("imagePath"))
//                    .append("content", !subTopic.getContent().isEmpty() ? subTopic.getContent() : oldDoc.getString("content"))
//            );
//
//            collection.updateOne(new Document().append("_id",  subTopic), returnDoc);
//        } catch (MongoException me) {
//            System.err.println("Unable to insert due to an error: " + me);
//        }
//        return returnDoc;
//    }
//
//    public String deleteSubTopic(String subTopicId){
//        String returnString = "deletion failed";
//        try (MongoClient mongoClient = MongoClients.create(this.connectionString)) {
//            MongoDatabase db = mongoClient.getDatabase("Gastrome");
//            MongoCollection<Document> collection = db.getCollection("SubTopic");
//
//            collection.deleteOne(new Document().append("_id",  subTopicId));
//            returnString = "Topic deleted successfully";
//        } catch (MongoException me) {
//            System.err.println("Unable to insert due to an error: " + me);
//        }
//        return returnString;
//    }
}
