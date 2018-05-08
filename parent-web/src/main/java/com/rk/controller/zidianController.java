package com.rk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rk.entity.Cailiaob;
import com.rk.entity.Cailiaotypeb;
import com.rk.entity.Danweib;
import com.rk.entity.Gongyingshangb;
import com.rk.entity.Jixingb;
import com.rk.entity.Pinlvb;
import com.rk.entity.Shengchanshangb;
import com.rk.entity.Xiyaozhongchengyaob;
import com.rk.entity.Yongfab;
import com.rk.entity.Zhongyaob;
import com.rk.service.CailiaobService;
import com.rk.service.CailiaodanweiService;
import com.rk.service.CailiaotypebService;
import com.rk.service.DanweibService;
import com.rk.service.GongyingshangbService;
import com.rk.service.JixingbService;
import com.rk.service.PinlvbService;
import com.rk.service.ShengchanshangbService;
import com.rk.service.XiyaozhongchengyaobService;
import com.rk.service.YongfabService;
import com.rk.service.ZhiliaoxiangmufenleibService;
import com.rk.service.ZhongyaobService;

@Controller
@RequestMapping("zidian")
public class zidianController {

	@Autowired
	private XiyaozhongchengyaobService xzy;
	
	@Autowired
	private GongyingshangbService gysservice;
	
	@Autowired
	private ShengchanshangbService scservice;
	
	@Autowired
	private DanweibService dw;
	
	@Autowired
	private PinlvbService plservice;
	
	@Autowired
	private YongfabService yfservice;
	
	@Autowired
	private  ZhongyaobService zyservice;
	
	@Autowired
	
	private CailiaotypebService clser;
	
	@Autowired
	
	private CailiaobService clservice;
	
	@Autowired
	
	private JixingbService jxservice;
	
	/**
	 * 西药/中成药/材料/三个列表展示
	 * @param model
	 * @return
	 */
	@RequestMapping("xiyao")
	public String xiyao(Model model) {
		List<Xiyaozhongchengyaob>list=xzy.Gellxizhong();
		List<Zhongyaob> zylist=zyservice.Gellzy();
		List<Cailiaob> cllist=clservice.Gellcl();
		model.addAttribute("list",list);
		model.addAttribute("zylist",zylist);
		model.addAttribute("cllist",cllist);
		return "zidianguanli";
	}
	/**
	 * 字典首界面
	 * @return
	 */
	@RequestMapping("Zidianindex")
	public String Zidianindex() {
		
		return "Zidianindex";
	}
	
	/**
	 * 中药新增
	 * @return
	 */
	@RequestMapping("xizhongadd")
	public String xizhongadd(Model model) {
		List<Gongyingshangb> gys=gysservice.gysGell();
		List<Pinlvb> pl=plservice.Gellpl();
		List<Yongfab> yf=yfservice.Gellyf();
		List<Shengchanshangb> scs=scservice.sccsGell();
		List<Danweib> danwei=dw.Gelldw();
		List<Jixingb> jxlist=jxservice.Gelljx();
		model.addAttribute("gys",gys);
		model.addAttribute("jxlist",jxlist);
		model.addAttribute("scs",scs);
		model.addAttribute("dw",danwei);
		model.addAttribute("pl",pl);
		model.addAttribute("yf",yf);
		return "XiyaozhongchengyaoAdd";
	}
	/**
	 * 材料查询
	 * @param model
	 * @return
	 */
	@RequestMapping("cailiao")
	public String cailiao(Model model) {
		List<Cailiaotypeb> clltypelist=clser.Gellcltype();
		List<Danweib> danwei=dw.Gelldw();
		
		model.addAttribute("dw",danwei);
		model.addAttribute("clltypelist",clltypelist);
		return "cailiaoadd";
	}
}
