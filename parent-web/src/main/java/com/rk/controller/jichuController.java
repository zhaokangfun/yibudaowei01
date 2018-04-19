package com.rk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rk.entity.Jichuhechengb;
import com.rk.service.JichuhechengbService;

@Controller
@RequestMapping("jichu")
public class jichuController {
	
	@Autowired
	private JichuhechengbService jichuhechengbService; 
	
	@RequestMapping("/jichu.html")
	public String jichu(Model model) {
		List<Jichuhechengb> getAll=jichuhechengbService.SelectAll();
		model.addAttribute("getAll", getAll);
		return "jichushezhi";
	}
}
