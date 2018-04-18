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
		return "shouye";
	}
	
	@RequestMapping("main")
	public String main(Model model) {
		return "main";
	}
	@RequestMapping("main1")
	public String main1(Model model) {
		return "main1";
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
