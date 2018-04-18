package com.rk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rk.entity.Keshib;
import com.rk.service.KeshibService;

@Controller
@RequestMapping("zhensuoguanli")
public class ZhenSuoGuanLiController {
	
	@Autowired
	private KeshibService keshibService;

	@RequestMapping("/deptMgr.html")
	public String goZhensuoGuanli(Model model) {
		//查询所有科室
		List<Keshib> list=keshibService.getAll();
		model.addAttribute("keshi", list);
		return "deptMgr";
	}
	
}
