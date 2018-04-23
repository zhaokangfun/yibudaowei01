package com.rk.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rk.entity.Xiyaozhongchengyaob;
import com.rk.service.XiyaozhongchengyaobService;

@Controller
@RequestMapping("xizhong")
public class XiyaozhongchengController {

	@Autowired
	private XiyaozhongchengyaobService xiyaoservice;
	
	/**
	 * 西药中成要添加
	 * @param xz
	 * @return
	 */
	
	@RequestMapping("xiyaoadd")
	@ResponseBody
	public int xiyaoadd(Xiyaozhongchengyaob xz) {
		int ret=xiyaoservice.xizhongadd(xz);
		return ret;
	}

}
