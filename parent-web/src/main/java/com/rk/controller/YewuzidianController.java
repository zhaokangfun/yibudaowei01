package com.rk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rk.entity.Laiyuanb;
import com.rk.entity.Yaopintypeb;
import com.rk.entity.Zhiliaoxiangmub;
import com.rk.entity.Zhiliaoxiangmufenleib;
import com.rk.entity.Zhiweib;
import com.rk.service.LaiyuanbService;
import com.rk.service.YaopintypebService;
import com.rk.service.ZhiliaoxiangmufenleibService;
import com.rk.service.ZhiweibService;

@Controller
@RequestMapping("yewu")
public class YewuzidianController {

	@Autowired
	private ZhiweibService zw;
	
	@Autowired
	private LaiyuanbService lyservice;
	
	@Autowired
	private ZhiliaoxiangmufenleibService zlfl;
	
	@Autowired
	private YaopintypebService yp;
	
	/**
	 * 业务字典的列表展示！！！
	 * @param model
	 * @return
	 */
	@RequestMapping("yewuzidianjiemian")
	public String yewuzidianjiemian(Model model) {
		List<Zhiweib> list=zw.Gellyszhiwei();
		List<Laiyuanb> lylist=lyservice.Gelllaiyuan();
		List<Zhiliaoxiangmufenleib> zlxmtype=zlfl.Gellzlxm();
		List<Yaopintypeb> yplist=yp.Gellyptype();
		model.addAttribute("yplist",yplist);
		model.addAttribute("list",list);
		model.addAttribute("zlxmtype",zlxmtype);
		model.addAttribute("lylist",lylist);
		return "Yewuzidian";
	}
	
	
	
	
	@RequestMapping("yewuadd")
	@ResponseBody
	public int addzhiwei(Zhiweib e) {
		int ret=zw.addzw(e);
		return ret;
	}
	
	/**
	 * 诊疗项目类型
	 * @param e
	 * @return
	 */
	@RequestMapping("xiangmutypeAdd")
	public String addzhiwei(Model model) {
		List<Zhiliaoxiangmufenleib> zlxmtype=zlfl.Gellzlxm();
		model.addAttribute("zlxmtype",zlxmtype);
		return "xiangmutypeAdd";
	}
	
	/**
	 * 诊疗项目类型添加
	 * @param e
	 * @return
	 */
	@RequestMapping("yewutianjia")
	@ResponseBody
	public Zhiliaoxiangmufenleib yewutianjia(Zhiliaoxiangmufenleib record) {
		int ret=zlfl.typeadd(record);
		int a=zlfl.idgell();
		Zhiliaoxiangmufenleib zl=zlfl.idselect(a);
		
		return zl;
	}
	
	
	
	/**
	 * 药品类型
	 * @param e
	 * @return
	 */
	@RequestMapping("yptypetianjia")
	@ResponseBody
	public Yaopintypeb yptypetianjia(Yaopintypeb record) {
		int ret=yp.yptypeadd(record);
		int a=yp.maxid();
		Yaopintypeb typeyp=yp.idselect(a);
		return typeyp;
	}
}
