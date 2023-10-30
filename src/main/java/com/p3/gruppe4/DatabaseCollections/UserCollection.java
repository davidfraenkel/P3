package com.p3.gruppe4.DatabaseCollections;

import org.bson.Document;

import java.util.Map;

public class UserCollection extends Document {

    public UserCollection() {
    }

    public UserCollection(String key, Object value) {
        super(key, value);
    }

    public UserCollection(Map<String, ?> map) {
        super(map);
    }
}
