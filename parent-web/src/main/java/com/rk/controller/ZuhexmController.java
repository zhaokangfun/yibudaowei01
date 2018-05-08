package com.rk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rk.entity.Xiangmub;
import com.rk.service.XiangmubService;

@Controller
@RequestMapping("zuhe")
public class ZuhexmController {

	@Autowired
	private XiangmubService xmservice;
	/**
	 * 组合治疗查询
	 * @param model
	 * @return
	 */
	@RequestMapping("zuhezhiliaoxmlist")
	public String zuhezhiliaoxmlist(int zhlx,Model model) {
		List<Xiangmub> list=xmservice.Gellzhxm(zhlx);
		model.addAttribute("list",list);
		return "ZuheZhiliaoxm";
	}
	
}
