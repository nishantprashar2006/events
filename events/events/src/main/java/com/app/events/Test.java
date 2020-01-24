package com.app.events;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class Test {

	@Autowired
	TestRepo repo;

	@GetMapping("/getUser")
	public String getUser() {
		TestEntity test = new TestEntity();
		test.setName("Dikshit");
		repo.save(test);
		//String test = repo.findNameById(1L);
		return "done";
	}
}
