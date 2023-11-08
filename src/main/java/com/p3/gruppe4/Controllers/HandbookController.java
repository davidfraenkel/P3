package com.p3.gruppe4.Controllers;

import com.p3.gruppe4.Models.Handbook.Handbook;
import org.bson.Document;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;

@RestController
public class HandbookController {
    Handbook handbook = new Handbook();

    @GetMapping("/getAllTopics")
    public HashSet<Document> getAllTopics(){
        return this.handbook.getAllTopics();
    }

    @GetMapping("/getTopicByName")
    @ResponseBody
    public Document getTopicByName(@RequestParam(name = "topicName") String topicName){
        return this.handbook.getTopic(topicName);
    }

    @PostMapping("/createTopic")
    public void createTopic(@RequestBody String name, String imagePath, String summary){
        System.out.println(name);
        this.handbook.createTopic(name, imagePath, summary);
    }
}
