package com.p3.gruppe4.Models.Handbook;

import org.bson.types.ObjectId;

public class Topic {
    private String name, imagePath;
    private ObjectId id;

    public Topic(String name, String imagePath) {
        this.name = name;
        this.imagePath = imagePath;
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
}
