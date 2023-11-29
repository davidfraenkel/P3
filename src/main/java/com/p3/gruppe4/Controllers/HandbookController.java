package com.p3.gruppe4.Controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.p3.gruppe4.Models.Handbook.Handbook;
import com.p3.gruppe4.Models.Handbook.SubTopic;
import com.p3.gruppe4.Models.Handbook.Topic;
import org.bson.Document;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashSet;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class HandbookController extends Controller {

    private Handbook handbook;
    public HandbookController() {
        this.handbook = new Handbook(this.createClient());
    }

//  TOPIC OPERATOINS
    @GetMapping("/getAllTopics")
    public HashSet<Document> getAllTopics(){
        return this.handbook.getAllTopics();
    }

    @GetMapping("/getTopicByName")
    @ResponseBody
    public Document getTopicByName(@RequestParam(name = "topicId") String topicId){
        return this.handbook.getTopic(topicId);
    }



    @PostMapping(value= "/createTopic", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public String createTopic(@RequestParam MultipartFile image,
                              @RequestParam("topic") String topicJson) {
        // Convert JSON string to TopicRequest object
        ObjectMapper objectMapper = new ObjectMapper();
        Topic topic = null;
        try {
            topic = objectMapper.readValue(topicJson, Topic.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            // Handle the exception as needed
            return "Failed to create topic";
        }

        // Access the properties of the TopicRequest object
        System.out.println("Name: " + topic.getName());
        System.out.println("Phone Number: " + topic.getImagePath());
        System.out.println("File Name: " + image.getOriginalFilename());

        // Your logic to save or process the data
        this.handbook.createTopic(topic, image).toJson();

        return "Topic created successfully";
    }

    @PostMapping("/editTopic")
    public String editTopic(@RequestBody Topic topic, @RequestParam(name = "topicId") String topicId){
        return this.handbook.editTopic(topicId, topic).toJson();
    }

    @PostMapping("/deleteTopic")
    public String editTopic(@RequestParam(name = "topicId") String topicId){
        return this.handbook.deleteTopic(topicId);
    }

    @GetMapping("/getAllSubTopics")
    public HashSet<Document> getAllSubTopics(@RequestParam(name = "parentTopicId") String parentId){
        return this.handbook.getAllSubTopics(parentId);
    }

    @GetMapping("/getSubTopic")
    public String getSubTopc(@RequestParam(name = "subTopicId") String id){
        return this.handbook.getSubTopic(id).toJson();
    }

    @PostMapping("/createSubTopic")
    public String createSubTopic(@RequestBody SubTopic subTopic, @RequestParam(name = "parentTopicId") String parentId){
        return this.handbook.createSubTopic(subTopic, parentId).toJson();
    }

    @PostMapping("/editSubTopic")
    public String editSubTopic(@RequestBody SubTopic subTopic, @RequestParam(name = "subTopicId") String subTopicId){
        return this.handbook.editSubTopic(subTopic, subTopicId).toJson();
    }

    @PostMapping("/deleteSubTopic")
    public String deleteSubTopic(@RequestParam(name = "subTopicId") String subTopicId){
        return this.handbook.deleteSubTopic(subTopicId);
    }
}
