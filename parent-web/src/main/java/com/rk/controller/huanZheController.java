package com.rk.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("huanzhe")
public class huanZheController {
	@RequestMapping("/huanzhedj.html")
	public String HuanZhe() {
		return "huanzhedj";
	}
}
