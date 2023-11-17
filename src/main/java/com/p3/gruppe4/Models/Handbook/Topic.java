package com.p3.gruppe4.Models.Handbook;

import org.bson.types.ObjectId;

public class Topic {
    private String name, imagePath, summary;
    private ObjectId id;

    public Topic(String name, String imagePath, String summary) {
        this.name = name;
        this.imagePath = imagePath;
        this.summary = summary;
        this.id = new ObjectId();
    }

    public ObjectId getId() {
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
