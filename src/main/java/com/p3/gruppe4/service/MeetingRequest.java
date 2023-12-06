package com.p3.gruppe4.service;

import org.bson.types.ObjectId;

public class MeetingRequest {
    private ObjectId id;
    private String name;
    private String email;
    private String message;
    private String date;
    private SelectedTime selectedTime;

    public MeetingRequest(String name, String email, String message, String date, SelectedTime selectedTime) {
        this.id = new ObjectId();
        this.name = name;
        this.email = email;
        this.message = message;
        this.date = date;
        this.selectedTime = selectedTime;
    }

    // Getters and Setters

    public ObjectId getId() {
        return id;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public SelectedTime getSelectedTime() {
        return selectedTime;
    }

    public void setSelectedTime(SelectedTime selectedTime) {
        this.selectedTime = selectedTime;
    }
}
