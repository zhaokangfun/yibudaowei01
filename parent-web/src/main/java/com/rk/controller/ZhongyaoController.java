package com.rk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rk.entity.Danweib;
import com.rk.entity.Jianfab;
import com.rk.entity.Shengchanshangb;
import com.rk.entity.Zhongyaob;
import com.rk.service.DanweibService;
import com.rk.service.JianfabService;
import com.rk.service.ShengchanshangbService;
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
	
	@Autowired
	private ShengchanshangbService scservice;
	
	@RequestMapping("Zhongyaoadd")
	public String doaddzy(Model model) {
		
		List<Danweib> dwlist=dwservice.Gelldw();
		List<Jianfab> jflist=jfservice.jianfaGell();
		List<Shengchanshangb> scs=scservice.sccsGell();
		model.addAttribute("dwlist", dwlist);
		model.addAttribute("jflist", jflist);
		model.addAttribute("scs",scs);
		return "Zhongyaoadd";
	}
	
	/**
	 * 中药添加
	 * @return
	 */
	@RequestMapping("addzy")
	@ResponseBody
	public int zyadd(Zhongyaob zy) {
		int ret=zyservice.addzy(zy);
		return ret;
	}

}
