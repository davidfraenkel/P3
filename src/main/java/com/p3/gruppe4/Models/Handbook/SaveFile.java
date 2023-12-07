package com.p3.gruppe4.Models.Handbook;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class SaveFile {
    private final Path rootLocation = Paths.get("src/main/resources/static/images");

    public SaveFile() {
        System.out.println("SaveFile created");
    }

    public void store(MultipartFile file) {
        try {
            if (file.isEmpty()) {
                throw new RuntimeException("Failed to store empty file.");
            }
            Files.copy(file.getInputStream(), Paths.get("src/main/app/public/images").resolve(file.getOriginalFilename()));
        } catch (IOException e) {
            throw new RuntimeException("Failed to store file.", e);
        }
    }
}
