package com.p3.gruppe4.Controllers;

import com.p3.gruppe4.Models.Handbook.Handbook;
import org.bson.Document;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
public class HandbookController {
    Handbook handbook = new Handbook();

    @GetMapping("/getAllTopics")
    public Set<Document> getAllTopics(){
        System.out.println("Print 123");
        System.out.println(this.handbook.getAllTopics());
        return this.handbook.getAllTopics();
    }

    @GetMapping("/getTopicByName")
    @ResponseBody
    public Document getTopicByName(@RequestParam(name = "topicName") String topicName){
        return this.handbook.getTopic(topicName);
    }
}
