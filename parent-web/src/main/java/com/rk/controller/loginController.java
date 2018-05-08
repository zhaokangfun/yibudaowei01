package com.rk.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rk.service.DenglubService;

/**
 * 登录控制器
 * @author Lxy（留着强哥讲单点登录的时候你可以用，你心情不好的话也可以删掉！）
 *
 */
@Controller
@RequestMapping("login")
public class loginController {
	
	/**
	 * 登录表
	 */
	@Autowired
	private DenglubService denglubService;
	/**
	 * 跳转登录页面
	 * @return
	 */
	@RequestMapping("/login.html")
	public String gologin() {
		return "login";
	}
}
