package com.app.events;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class Test {

	@GetMapping("/getUser")
	public String getUser() {
		
		return "Dikshit";
	}
}
