package com.p3.gruppe4.Models.Handbook;

import com.mongodb.MongoException;
import com.mongodb.client.*;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.Collections;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class Handbook {
    String connectionString = "mongodb+srv://pepperonis:ilovepepperonis321@p3gastrome.as1pjv9.mongodb.net/?retryWrites=true&w=majority\n";
    public Handbook (){
        System.out.println("Handbook created");
    }

    public Set<Document> getAllTopics(){
        Set<Document> returnSet = Collections.emptySet();
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

    public Document getTopic(String name){}

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
