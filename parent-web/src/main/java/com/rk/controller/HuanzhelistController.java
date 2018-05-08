package com.rk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rk.entity.Denglub;
import com.rk.entity.Huanzhexiangxib;
import com.rk.entity.Keshib;
import com.rk.entity.Laiyuanb;
import com.rk.service.DenglubService;
import com.rk.service.HuanzhexiangxibService;
import com.rk.service.KeshibService;
import com.rk.service.LaiyuanbService;

@Controller
@RequestMapping("huanzhelist")
public class HuanzhelistController {

	@Autowired
	private KeshibService keshibService;
	@Autowired
	private LaiyuanbService laiyuanbService;
	@Autowired
	private DenglubService denglubService;
	
	@Autowired
	private HuanzhexiangxibService huanzheService;
	@RequestMapping("hzlist.html")
	public String huanzhelist(Model model) {
		List<Laiyuanb> laiyuanlist=laiyuanbService.listall();
		model.addAttribute("laiyuanlist", laiyuanlist);
		List<Keshib> keshilist=keshibService.getAll();
		model.addAttribute("keshilist", keshilist);
		List<Denglub> list=denglubService.listkeshi(0);
		model.addAttribute("list", list);
		List<Huanzhexiangxib> huanzhelist=huanzheService.selectBy();
		model.addAttribute("huanzhelist",huanzhelist);
		return "huanzhelibiao";
	}
}
