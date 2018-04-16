package com.rk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rk.entity.Bancib;
import com.rk.service.BancibService;
@Controller
@RequestMapping("banci")
public class indexController {
	
	@Autowired
	private BancibService bancibService;
	
	@RequestMapping("/index.html")
	public String show(Model model) {
		List<Bancib> list=bancibService.getAll();
		model.addAttribute("list", list);
		return "assistLab";
	}

}	
