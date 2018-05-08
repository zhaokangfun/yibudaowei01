package com.rk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rk.entity.Zhiliaoxiangmub;
import com.rk.entity.Zhiliaoxiangmufenleib;
import com.rk.service.ZhiliaoxiangmubService;
import com.rk.service.ZhiliaoxiangmufenleibService;

@Controller
@RequestMapping("zhenliaoxm")
public class ZhenliaoController {

	@Autowired
	
	private ZhiliaoxiangmufenleibService zlservice;
	
	@Autowired
	
	private ZhiliaoxiangmubService zlxmservice;
	/*
	 * 诊疗界面
	 */
	@RequestMapping("zhenliao")
	public String zhenliaolist(Model model) {
		List<Zhiliaoxiangmufenleib> list=zlservice.Gellzlxm();
		List<Zhiliaoxiangmub> zllist=zlxmservice.Gellzllist();
		model.addAttribute("list",list);
		model.addAttribute("zllist",zllist);
		return "ZhenliaoXiangmu";
	}
	
	/**
	 * 添加项目分类信息
	 * @param zlxmb
	 * @return
	 */
	@RequestMapping("addzlxm")
	@ResponseBody
	public int zlxmadd(Zhiliaoxiangmub zlxmb) {
		int x=(int)(Math.random()*100000);
		String a="D"+x;
		zlxmb.setZlxmbianma(a);
		int ret=zlxmservice.addzlxm(zlxmb);
		return ret;
	}
}
