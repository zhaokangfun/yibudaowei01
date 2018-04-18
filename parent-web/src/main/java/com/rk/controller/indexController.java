package com.rk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rk.entity.Bancib;
import com.rk.entity.Denglub;
import com.rk.service.BancibService;
import com.rk.service.DenglubService;
@Controller
@RequestMapping("banci")
public class indexController {
	
	@Autowired
	private BancibService bancibService;
	
	@Autowired
	private DenglubService dengluService;
	
	@RequestMapping("/index.html")
	public String show(Model model) {
		List<Bancib> list=bancibService.getAll();
		model.addAttribute("list", list);
		return "shouye";
	}
	
	@RequestMapping("main")
	public String main(Model model) {
		return "main";
	}
	@RequestMapping("jinrijiuzhen")
	public String todayPatient(Model model) {
		return "todayPatientList";
	}
	
	@RequestMapping("kuaisujiezhen")
	public String kuaisujiezhen(Model model){
		List<Denglub> yslist=dengluService.listAll();
		model.addAttribute("yslist", yslist);
		return "kuaisujiezhen";
	}

}
