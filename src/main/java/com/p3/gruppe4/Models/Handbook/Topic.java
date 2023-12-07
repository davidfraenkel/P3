package com.p3.gruppe4.Models.Handbook;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.bson.types.ObjectId;

public class Topic {
    private String name, imagePath;
    private ObjectId id;

    public Topic() {}
    @JsonCreator
    public Topic(@JsonProperty("name") String name, @JsonProperty("imagePath") String imagePath) {
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

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }
}
