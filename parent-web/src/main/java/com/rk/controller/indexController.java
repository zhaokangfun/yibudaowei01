package com.rk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rk.entity.Bancib;
import com.rk.entity.Denglub;
import com.rk.entity.Huanzhexiangxib;
import com.rk.service.BancibService;
import com.rk.service.DenglubService;
import com.rk.service.HuanzhexiangxibService;
@Controller
@RequestMapping("banci")
public class indexController {
	
	@Autowired
	private BancibService bancibService;
	
	@Autowired
	private DenglubService dengluService;
	@Autowired
	private HuanzhexiangxibService hzxiangxiService;
	
	
	@RequestMapping("/index.html")
	public String show(Model model) {
		List<Bancib> list=bancibService.getAll();
		model.addAttribute("list", list);
		return "shouye";
	}
	
	@RequestMapping("main")
	public String main(Model model) {
		return "main";
	}
	@RequestMapping("jinrijiuzhen")
	public String todayPatient(Model model) {
		List<Huanzhexiangxib> list=hzxiangxiService.listOnjzStatics(1);
		int OneSize=list.size();
		List<Huanzhexiangxib> list1=hzxiangxiService.listOnjzStatics(2);
		int TwoSize=list1.size();
		List<Huanzhexiangxib> list2=hzxiangxiService.listOnjzStatics(3);
		int ThreeSize=list2.size();
		model.addAttribute("OneSize", OneSize);
		model.addAttribute("list", list);
		model.addAttribute("TwoSize", TwoSize);
		model.addAttribute("list1", list1);
		model.addAttribute("ThreeSize", ThreeSize);
		model.addAttribute("list2", list2);
		return "todayPatientList";
	}
	
	@RequestMapping("kuaisujiezhen")
	public String kuaisujiezhen(Model model){
		List<Denglub> yslist=dengluService.listAll();
		model.addAttribute("yslist", yslist);
		return "kuaisujiezhen";
	}
	
	@RequestMapping(value="jiezhenzhuangtai.json",method=RequestMethod.POST)
	@ResponseBody
	public Object houzhen(Integer id)
	{
		List<Huanzhexiangxib> list=hzxiangxiService.listOnjzStatics(id);
		return list;
	}

}	
