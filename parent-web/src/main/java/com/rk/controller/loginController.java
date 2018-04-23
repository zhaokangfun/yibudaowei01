package com.rk.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rk.service.DenglubService;

@Controller
@RequestMapping("login")
public class loginController {
	
	@Autowired
	private DenglubService denglubService;
	
	@RequestMapping("/login.html")
	public String gologin() {
		return "login";
	}
	//String adminzh,String password
}
