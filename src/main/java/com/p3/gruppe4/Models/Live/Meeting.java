package com.p3.gruppe4.Models.Live;


import com.mongodb.MongoException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.p3.gruppe4.Models.Handbook.SaveFile;
import com.p3.gruppe4.Models.Handbook.Topic;
import com.p3.gruppe4.service.MeetingRequest;
import org.bson.Document;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;

public class Meeting {

    private MongoClient mongoClient;
    public Meeting(MongoClient client) {
        this.mongoClient = client;
    }


    public HashSet<Document> getAllMeetings(){
        HashSet<Document> returnSet = new HashSet<>(Collections.emptySet());
        try {
            MongoDatabase db = this.mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Meeting");

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

    public Document createMeeting(MeetingRequest request) {
        Document returnDocument = new Document();
        try  {
            MongoDatabase db = this.mongoClient.getDatabase("Gastrome");

            if (db.getCollection("Meeting") == null) {
                db.createCollection("Meeting");
                System.out.println("Collection created successfully");
            }

            MongoCollection<Document> collection = db.getCollection("Meeting");
            System.out.println("Collection sampleCollection selected successfully");
            returnDocument = new Document()
                    .append("_id", request.getId().toString())
                    .append("name", request.getName())
                    .append("email", request.getEmail())
                    .append("message", request.getMessage())
                    .append("date", request.getDate())
                    .append("selectedTime", request.getSelectedTime().getValue())
                    ;
            collection.insertOne(returnDocument);

            // Prints a message if any exceptions occur during the operation
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
        return returnDocument;
    }
}
