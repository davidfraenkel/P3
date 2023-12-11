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
            return "Failed to create topic";
        }
        // Your logic to save or process the data
        this.handbook.createTopic(topic, image).toJson();

        return "Topic created successfully";
    }

    @PostMapping(value= "/editTopic", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public String editTopic(@RequestParam(required = false) MultipartFile image,
                            @RequestParam("topic") String topicJson,
                            @RequestParam(name = "topicId") String topicId){
        // Convert JSON string to TopicRequest object
        ObjectMapper objectMapper = new ObjectMapper();
        System.out.println(topicId);
        Topic topic = null;
        try {
            topic = objectMapper.readValue(topicJson, Topic.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "Failed to create topic";
        }
        // Your logic to save or process the data
        this.handbook.editTopic(topicId ,topic, image).toJson();

        return "Topic updated successfully";
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
    @ResponseBody
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
            return "Failed to create topic";
        }

        return this.handbook.createSubTopic(subTopic, image).toJson();
    }

    @PostMapping(value = "/editSubTopic", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.APPLICATION_JSON_VALUE })
    public String editSubTopic(
            @RequestParam(required = false) MultipartFile image,
            @RequestParam("subTopic") String subTopicJson,
            @RequestParam(name = "subTopicId") String subTopicId
    ) {
        ObjectMapper objectMapper = new ObjectMapper();
        SubTopic subTopic = null;
        try {
            subTopic = objectMapper.readValue(subTopicJson, SubTopic.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "Failed to create topic";
        }
        // Your logic to save or process the data
        return this.handbook.editSubTopic(subTopic, subTopicId, image).toJson();
    }

    @PostMapping(value = "/editSubTopicContent", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.APPLICATION_JSON_VALUE })
    public String editSubTopicContent(
            @RequestParam(value = "jsonData", required = false) String jsonData,
            @RequestParam(value = "fileData", required = false) List<MultipartFile> files,
            @RequestParam(value = "subtopicId", required = false) String subtopicId
    ) {
        return this.handbook.editSubTopicContent(jsonData, subtopicId, files).toJson();
    }



    @PostMapping("/deleteSubTopic")
    public long deleteSubTopic(@RequestParam(name = "subTopicId") String subTopicId){
        return this.handbook.deleteSubTopic(subTopicId);
    }
}
