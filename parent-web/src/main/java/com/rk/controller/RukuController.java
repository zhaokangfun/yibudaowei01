package com.rk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rk.entity.Rukub;
import com.rk.entity.Zhongyaob;
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
	
	/**
	 * 入库添加
	 * @return
	 */
	@RequestMapping("rktj")
	public String rktj(Model model) {
		
		return "xinzengrk";
	}
	@RequestMapping("delrk")
	@ResponseBody
	public int delrk(Integer rkid) {
		int ret=rkservice.delerk(rkid);
		return ret;
	}
	
	/**
	 * 文本框
	 * @return
	 */
	@RequestMapping("textsele")
	@ResponseBody
	public List<Zhongyaob> textsele(String pinyin,Model model) {
		List<Zhongyaob> list=rkservice.textSelect(pinyin);
		return list;
	}
	
	
}
