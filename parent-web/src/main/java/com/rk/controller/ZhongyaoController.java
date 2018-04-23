package com.rk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rk.entity.Danweib;
import com.rk.entity.Jianfab;
import com.rk.service.DanweibService;
import com.rk.service.JianfabService;
import com.rk.service.ZhongyaobService;

@Controller
@RequestMapping("zhongyao")
public class ZhongyaoController {

	@Autowired
	private ZhongyaobService zyservice;
	
	@Autowired
	private JianfabService jfservice;
	
	@Autowired
	private DanweibService dwservice;
	@RequestMapping("Zhongyaoadd")
	public String doaddzy(Model model) {
		
		List<Danweib> dwlist=dwservice.Gelldw();
		List<Jianfab> jflist=jfservice.jianfaGell();
		
		model.addAttribute("dwlist", dwlist);
		model.addAttribute("jflist", jflist);
		return "Zhongyaoadd";
	}
}
