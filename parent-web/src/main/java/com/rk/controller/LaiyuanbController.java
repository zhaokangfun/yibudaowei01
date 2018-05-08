package com.rk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rk.entity.Laiyuanb;
import com.rk.service.LaiyuanbService;

@Controller
@RequestMapping("laiyuan")
public class LaiyuanbController {

	@Autowired
	private LaiyuanbService lyservice;
	
	/**
	 * 来源添加
	 * @param ly
	 * @return
	 */
	@RequestMapping("lyadd")
	@ResponseBody
	public Laiyuanb lyadd(String lyname) {
		
		int a=lyservice.lyadd(lyname);
		
		int b=lyservice.idhq();
		Laiyuanb lyb=lyservice.ylidgell(b);
		
		return lyb;
	}
}
