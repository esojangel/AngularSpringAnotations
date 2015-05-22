package com.xoce.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/")
@Controller
public class MainCtrl {
	@RequestMapping
	public String home(){
		return "index";
	}
	@RequestMapping("/app")
	public String app(){
		return "app";
	}
}
