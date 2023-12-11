package com.p3.gruppe4.Controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.p3.gruppe4.Models.Handbook.Handbook;
import com.p3.gruppe4.Models.Handbook.SubTopic;
import com.p3.gruppe4.Models.Handbook.Topic;
import org.bson.Document;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

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

    @GetMapping("/getTopic")
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

    @GetMapping("/deleteTopic")
    public long deleteTopic(@RequestParam(name = "topicId") String topicId){
        return this.handbook.deleteTopic(topicId);
    }

    @GetMapping("/getAllSubTopics")
    public HashSet<Document> getAllSubTopics(@RequestParam(name = "parentTopicId") String parentId){
        return this.handbook.getAllSubTopics(parentId);
    }

    @GetMapping("/getSubTopic")
    public String getSubTopic(@RequestParam(name = "subTopicId") String id){
        return this.handbook.getSubTopic(id).toJson();
    }

    @PostMapping(value= "/createSubTopic", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public String createSubTopic(@RequestParam MultipartFile image,
                                 @RequestParam("subTopic") String subTopicJSON){
        // Convert JSON string to TopicRequest object
        ObjectMapper objectMapper = new ObjectMapper();
        SubTopic subTopic = null;
        try {
            subTopic = objectMapper.readValue(subTopicJSON, SubTopic.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            // Handle the exception as needed
            return "Failed to create topic";
        }

        // Access the properties of the TopicRequest object
        System.out.println("Name: " + subTopic.getName());
        System.out.println("Parent ID: " + subTopic.getParentId());
        System.out.println("File Name: " + image.getOriginalFilename());

        return this.handbook.createSubTopic(subTopic, image).toJson();
    }

    @PostMapping(value = "/editSubTopic", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.APPLICATION_JSON_VALUE })
    public String editSubTopic(
            @RequestParam(value = "jsonData", required = false) String jsonData,
            @RequestParam(value = "fileData", required = false) List<MultipartFile> files,
            @RequestParam(value = "subtopicId", required = false) String subtopicId
    ) {
        // Parse the JSON data
        ObjectMapper objectMapper = new ObjectMapper();
        List<Map<String, String>> jsonList;
        try {
            System.out.println("SubtopicID: " + subtopicId);
            jsonList = objectMapper.readValue(jsonData, new TypeReference<List<Map<String, String>>>() {});
            for (Map<String, String> jsonField : jsonList) {
                System.out.println("Order: " + jsonField.get("order"));
                System.out.println("Type: " + jsonField.get("type"));
                System.out.println("Value: " + jsonField.get("value"));
            }
        } catch (IOException e) {
            e.printStackTrace();
            // Handle JSON parsing exception
            return "Failed to parse JSON data";
        }

            return this.handbook.editSubTopic(jsonData, subtopicId, files).toJson();
    }



    @PostMapping("/deleteSubTopic")
    public long deleteSubTopic(@RequestParam(name = "subTopicId") String subTopicId){
        return this.handbook.deleteSubTopic(subTopicId);
    }
}
