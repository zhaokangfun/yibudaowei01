package com.rk.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.apache.http.HttpRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.rk.entity.Keshib;
import com.rk.entity.Keshishuxing;
import com.rk.entity.Resource;
import com.rk.service.KeshibService;
import com.rk.service.KeshishuxingService;
import com.rk.service.ResourceService;

/**
 * 科室的控制器
 * @author Lxy
 *
 */
@Controller
@RequestMapping("zhensuoguanli")
public class ZhenSuoGuanLiController {
	
	//科室
	@Autowired
	private KeshibService keshibService;
	//科室属性
	@Autowired
	private KeshishuxingService keshishuxingService;
	
	/**
	 * 跳转科室页面
	 * @param model
	 * @return
	 */
	@RequestMapping("/deptMgr.html")
	public String goZhensuoGuanli(Model model) {
		//查询所有科室
		List<Keshib> list=keshibService.getAll();
		List<Keshishuxing> kssx=keshishuxingService.getAll();
		model.addAttribute("keshi", list);
		model.addAttribute("kssx", kssx);
		return "deptMgr";
	}
	/**
	 * 根据条件查询
	 * @param yuyuestatus 预约的状态
	 * @param status		科室的状态	
	 * @param keshiname		科室的名称
	 * @param keshiid		科室的id
	 * @return		返回Json
	 */
	@RequestMapping("/dosel")
	@ResponseBody
	public Object getkeshiByStatus(Integer yuyuestatus,Integer status,String keshiname,Integer keshiid) {
		Keshib keshib=new Keshib();
		keshib.setYuyuestatus(yuyuestatus);
		keshib.setStatus(status);
		keshib.setKeshiname(keshiname);
		keshib.setKeshiid(keshiid);
		List<Keshib> keshi=	keshibService.getKeshiByYuYueStatus(keshib);
		if(keshi!=null) {
			return keshi;	
		}
		return null;
	}
	
	/**
	 * 启用或者停用
	 * @param id 科室的id
	 * @return
	 */
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
	/**
	 * 科室的添加
	 * @param keshiname		科室名称
	 * @param keshitypeid	科室类型 
	 * @param yuyuestatus	预约状态
	 * @param keshiaddress	科室的地址
	 * @param keshimiaoshu	科室的描述
	 * @param parentid		父级（科室id）
	 * @param shuxun		科室的顺序
	 * @return
	 */
	@RequestMapping(value="/doAddKeshi.html",method=RequestMethod.POST)
	@ResponseBody
	public int doAddKeshi(String keshiname,Integer keshitypeid,Integer yuyuestatus,String keshiaddress,String keshimiaoshu,Integer parentid,Integer shuxun) { 
		int num=0;
//		if(jsondata!=null) {
//			JSONObject json=JSONObject.parseObject(jsondata);
//			System.out.println(jsondata);
			Keshib keshib=new Keshib();
			keshib.setKeshiname(keshiname);
			keshib.setKeshitypeid(keshitypeid);
			Date now=new Date();
			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
			String dateString = formatter.format(now);
			keshib.setCreatetime(dateString);
			keshib.setStatus(1);
			keshib.setYuyuestatus(yuyuestatus);
			keshib.setKeshiaddress(keshiaddress);
			keshib.setKeshimiaoshu(keshimiaoshu);
			if(parentid==null) {
				keshib.setParentid(null);
			}else {
				keshib.setParentid(parentid);
			}
			keshib.setShuxun(shuxun);
			num=keshibService.insertSelective(keshib);
		return num;
		
	}
	/**
	 * 执行修改
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/Editss",method=RequestMethod.POST)
	@ResponseBody
	public int doupdata(Integer keshiid,String keshiname,Integer keshitypeid,Integer yuyuestatus,String keshiaddress,String keshimiaoshu,Integer parentid,Integer shuxun) {
		Keshib keshib=new Keshib();
		keshib.setKeshiid(keshiid);
		keshib.setKeshiname(keshiname);
		keshib.setKeshitypeid(keshitypeid);
		keshib.setYuyuestatus(yuyuestatus);
		keshib.setKeshiaddress(keshiaddress);
		keshib.setKeshimiaoshu(keshimiaoshu);
		keshib.setParentid(parentid);
		keshib.setShuxun(shuxun);
		int num=keshibService.updateByPrimaryKeySelective(keshib);
		return num;
	}
	/**
	 * 这个页面就是一个测试的页面，想删就删了
	 * @return
	 */
	@RequestMapping("/haha.html")
	public String gohaha() {
		return "haha";
	}
}
