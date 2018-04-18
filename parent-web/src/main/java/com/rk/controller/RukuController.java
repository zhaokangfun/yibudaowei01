package com.rk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rk.entity.Rukub;
import com.rk.service.RukubService;

@Controller
@RequestMapping("ruku")
public class RukuController {

	@Autowired
	private RukubService rkservice;
	
	/**
	 * 入库信息
	 * @return
	 */
	@RequestMapping("rkxx")
	public String rkxx(Model model) {
		List<Rukub> list=rkservice.Gellrk();
		model.addAttribute("list",list);
		return "RuKuxx";
	}
}
