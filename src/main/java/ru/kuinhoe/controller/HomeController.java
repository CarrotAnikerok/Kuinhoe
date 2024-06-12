package ru.kuinhoe.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;

@Controller
@RequestMapping("/api/v1/kuinhoe")
public class HomeController {

    @GetMapping("/home")
	public String home(Model model) {
		model.addAttribute("title", "main page");
		return "home";
	}

    @GetMapping("/activeplot")
	public String activePlot(Model model) {
		model.addAttribute("title", "main page");
		return "active_plot";
	}

	// @GetMapping("/scenario")
	// public @ResponseBody String getScenario() {
	// 	return "{ \"employees\" : [ { \"firstName\":\"John\" , \"lastName\":\"Doe\" }, { \"firstName\":\"Anna\" , \"lastName\":\"Smith\" }, { \"firstName\":\"Peter\" , \"lastName\":\"Jones\" }]}";
	// }

}
