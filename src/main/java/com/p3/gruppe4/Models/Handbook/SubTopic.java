package com.p3.gruppe4.Models.Handbook;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.bson.types.ObjectId;

public class SubTopic {

    private String name, imagePath, parentId, content;
    private ObjectId id;

    @JsonCreator
    public SubTopic(@JsonProperty("name") String name, @JsonProperty("imagePath") String imagePath, @JsonProperty("parentId") String parentId, @JsonProperty("content") String content) {
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
