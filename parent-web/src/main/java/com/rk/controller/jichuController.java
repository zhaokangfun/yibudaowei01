package com.rk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rk.entity.Bancib;
import com.rk.entity.Jichuhechengb;
import com.rk.entity.Shijianduanb;
import com.rk.entity.Yuyueguizeb;
import com.rk.entity.Yuyuehcb;
import com.rk.service.BancibService;
import com.rk.service.JichuhechengbService;
import com.rk.service.ShijianduanbService;
import com.rk.service.YuyueguizebService;
import com.rk.service.YuyuehcbService;

@Controller
@RequestMapping("jichu")
public class jichuController {
	
	@Autowired
	private JichuhechengbService jichuhechengbService; 
	@Autowired
	private ShijianduanbService shijianbaoService;
	@Autowired
	private BancibService banciService;
	@Autowired
	private YuyueguizebService yuyueService;
	@Autowired
	private YuyuehcbService yuService;
	@RequestMapping("/jichu.html")
	public String jichu(Model model) {
		List<Jichuhechengb> getAll=jichuhechengbService.SelectAll();
		model.addAttribute("getAll", getAll);
		List<Shijianduanb> AllList=shijianbaoService.AllList();
		List<Bancib> BanList=banciService.getAll();
		List<Yuyueguizeb> SelectAll=yuyueService.SelectAll();
		List<Yuyuehcb> listAll=yuService.listAll();
		model.addAttribute("AllList", AllList);
		model.addAttribute("banList",BanList);
		model.addAttribute("SelectAll", SelectAll);
		model.addAttribute("listAll", listAll);
		return "jichushezhi";
	}
	
	@RequestMapping("/UpdataJichu.html")
	@ResponseBody
	public int UpdataJiChu(int[] zhi,int[] id) {
		int num=0;
		for (int i = 0; i < id.length; i++) {
			num=jichuhechengbService.updateBy(zhi[i], id[i]);;
		}
		return num;
	}
	@RequestMapping("updatayuyue.html")
	@ResponseBody
	public int updatayuyue(String[] zhi,int[] id,int kaishi1,int kaishi2,int jieshu1,int jieshu2) {
		int num=0;
		for (int i = 0; i < id.length; i++) {
			num=yuyueService.updateBy(zhi[i], id[i]);;
		}
		Yuyuehcb yu=new Yuyuehcb();
		yu.setBanciid(1);
		yu.setYyhcid(1);
		yu.setJssjduan(jieshu1);
		yu.setKssjduan(kaishi1);
		Yuyuehcb yu1=new Yuyuehcb();
		yu1.setBanciid(2);
		yu1.setYyhcid(2);
		yu1.setJssjduan(jieshu2);
		yu1.setKssjduan(kaishi2);
		yuService.updateBy(yu);
		yuService.updateBy(yu1);
		
		return num;
	}
	
}
