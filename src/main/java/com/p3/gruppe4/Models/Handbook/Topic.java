package com.p3.gruppe4.Models.Handbook;

import org.bson.types.ObjectId;

public class Topic {
    private String id, name, imagePath, summary;

//    public Topic(String name, String imagePath, String summary) {
//        this.name = name;
//        this.imagePath = imagePath;
//        this.summary = summary;
//        this.id = new ObjectId().toString();
//    }

    public Topic(String id, String name, String imagePath, String summary) {
        this.id = !id.isEmpty() ? id : new ObjectId().toString();
        this.name = name;
        this.imagePath = imagePath;
        this.summary = summary;
    }

    public String getId() {
        return this.id;
    }

    public String getName() {
        return name;
    }

    public String getImagePath() {
        return imagePath;
    }

    public String getSummary() {
        return summary;
    }
}
