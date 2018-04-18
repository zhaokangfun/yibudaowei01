package com.rk.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rk.entity.Denglub;
import com.rk.service.DenglubService;

@Controller
@RequestMapping("gologin")
public class DenglubController {
	
	@Autowired
	private DenglubService denglubService;

	@RequestMapping("/login.html")
	public String gologin() {
		return "login";
	}
	
	@RequestMapping(value="/dologin.html",method=RequestMethod.GET)
	@ResponseBody
	public int dologin(String adminzh,String password) {
		Denglub denglub= denglubService.dologin(adminzh, password);
		if(denglub!=null) {
			return 0;
		}else {
			return 1;	
		}
	}
}
