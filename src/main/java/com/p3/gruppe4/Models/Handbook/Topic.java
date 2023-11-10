package com.p3.gruppe4.Models.Handbook;

public class Topic {
    private String name, imagePath, summary;

    public Topic(String name, String imagePath, String summary) {
        this.name = name;
        this.imagePath = imagePath;
        this.summary = summary;
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
