package com.p3.gruppe4.Models.Handbook;

import org.bson.types.ObjectId;

public class SubTopic {

    private String name, imagePath, parentId, content;
    private ObjectId id;

    public SubTopic(String name, String imagePath, String parentId, String content) {
        this.name = name;
        this.imagePath = imagePath;
        this.parentId = parentId;
        this.content = content;
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

    public String getParentId() {
        return parentId;
    }

    public String getContent() {
        return content;
    }
}
