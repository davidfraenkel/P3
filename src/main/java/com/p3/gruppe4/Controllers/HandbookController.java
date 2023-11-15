package com.p3.gruppe4.Controllers;

import com.p3.gruppe4.Models.Handbook.Handbook;
import com.p3.gruppe4.Models.Handbook.Topic;
import org.bson.Document;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
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
    public String createTopic(@RequestBody Topic topic){
        return this.handbook.createTopic(topic).toJson();
    }

    @PostMapping("/editTopic")
    public String editTopic(@RequestBody Topic topic){
        return this.handbook.editTopic(topic).toJson();
    }
}
