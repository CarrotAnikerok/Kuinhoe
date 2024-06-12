package ru.kuinhoe.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ru.kuinhoe.service.FileService;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@RestController
@RequestMapping("/api/v1/kuinhoe")
public class FileController {
    @Autowired
    private FileService fileService;

    // API endpoint to read a file from the resources folder
    @GetMapping("/scenario")
    public @ResponseBody String readFile() {
        try {
            // Call the service method to read the file
            return fileService.readFileFromResources("static/www/json/scenario.json");
        } catch (IOException e) {
            // Print stack trace if an exception occurs
            e.printStackTrace();
            // Return an error message if reading the file fails
            return "Error occurred while reading file.";
        }
    }

    @GetMapping("scenario2")
    public @ResponseBody String getScenario2() {
        return "привет";
    }
    
}
