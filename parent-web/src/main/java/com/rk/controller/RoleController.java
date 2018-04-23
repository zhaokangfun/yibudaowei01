package com.rk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rk.entity.Roleb;
import com.rk.service.RolebService;

@Controller
@RequestMapping("role")
public class RoleController {
	
	@Autowired
	private RolebService rolebService;
	
	@RequestMapping("/Role.html")
	public String goRole(Model model) {
		List<Roleb> list= rolebService.getAll();
		model.addAttribute("role", list);
		return "role";
	}
}
