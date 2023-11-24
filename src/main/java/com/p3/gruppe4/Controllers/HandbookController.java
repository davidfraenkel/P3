package com.p3.gruppe4.Controllers;

import com.p3.gruppe4.Models.Handbook.Handbook;
import com.p3.gruppe4.Models.Handbook.SubTopic;
import com.p3.gruppe4.Models.Handbook.Topic;
import org.bson.Document;
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

    @PostMapping("/createTopic")
    public String createTopic(@RequestBody Topic topic, @RequestParam(name = "file") MultipartFile file){
        return this.handbook.createTopic(topic, file).toJson();
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
