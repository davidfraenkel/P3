package com.p3.gruppe4.Controllers;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;

public abstract class Controller {
    private final String connectionString = "mongodb+srv://pepperonis:ilovepepperonis321@p3gastrome.as1pjv9.mongodb.net/?retryWrites=true&w=majority";
    protected MongoClient createClient(){
        return MongoClients.create(this.connectionString);
    }

}
