package com.rk.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rk.entity.Cailiaob;
import com.rk.service.CailiaobService;

@Controller
@RequestMapping("cailiao")
public class CailiaoController {

	@Autowired
	private CailiaobService clservice;
	/**
	 * 添加材料
	 * @return
	 */
	@RequestMapping("addcailiao")
	@ResponseBody
	public int addcailiao(Cailiaob cl) {
		int x=(int)(Math.random()*100000);
		String a=""+x;
		cl.setClbianma(a);
		int ret=clservice.addcailiao(cl);
		return ret;
	}
}
