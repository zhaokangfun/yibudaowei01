package com.rk.controller;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.rk.entity.Keshib;
import com.rk.entity.Keshishuxing;
import com.rk.service.KeshibService;
import com.rk.service.KeshishuxingService;

@Controller
@RequestMapping("zhensuoguanli")
public class ZhenSuoGuanLiController {
	
	@Autowired
	private KeshibService keshibService;
	//科室属性
	@Autowired
	private KeshishuxingService keshishuxingService;
	//跳转科室页面
	@RequestMapping("/deptMgr.html")
	public String goZhensuoGuanli(Model model) {
		//查询所有科室
		List<Keshib> list=keshibService.getAll();
		List<Keshishuxing> kssx=keshishuxingService.getAll();
		model.addAttribute("keshi", list);
		model.addAttribute("kssx", kssx);
		return "deptMgr";
	}
	//根据开通预约状态查询
	@RequestMapping("")
	public Object getkeshiByStatus(int status) {
		
		return null;
	}
	//启用或者停用
	@RequestMapping("/updatastatus.html")
	@ResponseBody
	public int goAddKeshi(Integer id) {
		//根据id返回他的对象
		Keshib keshib= keshibService.selectByPrimaryKey(id);
		if(keshib!=null) {
			int num=keshib.getStatus();
			if(num==1) {	//如果启用让他不启用
				keshib.setStatus(2);
			}else {
				keshib.setStatus(1);
			}
		}
		//修改
		int ret =keshibService.updateByPrimaryKeySelective(keshib);
		return ret;
	}
	//添加
	@RequestMapping(value="/doAddKeshi.html",method=RequestMethod.POST)
	@ResponseBody
	public Object doAddKeshi(String jsondata) {
		JSONObject json=JSONObject.parseObject(jsondata);
		System.out.println(jsondata);
		Keshib keshib=new Keshib();
		keshib.setKeshiname(json.getString("keshiname"));
		keshib.setKeshitypeid(json.getInteger("keshitypeid"));
		Date now=new Date();
		keshib.setCreatetime(now.toString());
		keshib.setStatus(1);
		keshib.setYuyuestatus(json.getInteger("yuyuestatus"));
		keshib.setKeshiaddress(json.getString("keshiaddress"));
		keshib.setKeshimiaoshu(json.getString("keshimiaoshu"));
		if(json.getInteger("parentid")==null) {
			keshib.setParentid(null);
		}
		keshib.setShuxun(json.getInteger("shuxun"));
		int num=keshibService.insertSelective(keshib);
		return num;
	}
	@RequestMapping("/haha.html")
	public String gohaha() {
		return "haha";
	}
}
