package com.rk.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.w3c.dom.ls.LSInput;

import com.rk.entity.China;
import com.rk.entity.Denglub;
import com.rk.entity.Guominshib;
import com.rk.entity.Huanzhexiangxib;
import com.rk.entity.Huanzhexinxib;
import com.rk.entity.Jiwangshib;
import com.rk.entity.Keshib;
import com.rk.entity.Laiyuanb;
import com.rk.entity.Lianxirentypeb;
import com.rk.entity.Xuexingb;
import com.rk.entity.Zhengjianlleixingb;
import com.rk.service.ChinaService;
import com.rk.service.DenglubService;
import com.rk.service.GuominshibService;
import com.rk.service.HuanzhexiangxibService;
import com.rk.service.HuanzhexinxibService;
import com.rk.service.JiwangshibService;
import com.rk.service.KeshibService;
import com.rk.service.LaiyuanbService;
import com.rk.service.LianxirentypebService;
import com.rk.service.XuexingbService;
import com.rk.service.ZhengjianlleixingbService;

@Controller
@RequestMapping("huanzhe")
public class huanZheController {
	@Autowired
	private LaiyuanbService laiyuanbService; //来源
	@Autowired
	private ZhengjianlleixingbService zhengjianlleixingbService;  //证件类型
	@Autowired
	private ChinaService chinaService;                            //地址
	@Autowired
	private KeshibService keshibService;							//科室
	@Autowired
	private XuexingbService xueService;								//血型
	@Autowired
	private DenglubService denglubService;							//登记
	@Autowired
	private GuominshibService guominService;						//过敏历史
	@Autowired
	private JiwangshibService jiwangService;						//既往史
	@Autowired
	private HuanzhexiangxibService hzxiangxiService;				//患者基础
	@Autowired
	private HuanzhexinxibService huanzheService;					//患者详细
	@Autowired
	private LianxirentypebService lxrService;						//联系人
	/**
	 * 绑定患者登记界面
	 * @param model
	 * @return
	 */
	@RequestMapping("/huanzhedj.html")
	public String HuanZhe(Model model) {
		List<Laiyuanb> laiyuanlist=laiyuanbService.listall();
		model.addAttribute("laiyuanlist", laiyuanlist);
		List<Zhengjianlleixingb> zhengjianlist=zhengjianlleixingbService.list();
		model.addAttribute("zhengjianlist", zhengjianlist);
		List<China> chinalist=chinaService.listall(0);
		model.addAttribute("chinalist", chinalist);
		List<Keshib> keshilist=keshibService.getAll();
		model.addAttribute("keshilist", keshilist);
		List<Xuexingb> list=xueService.list();
		model.addAttribute("list", list);
		List<Lianxirentypeb> lxrlist=lxrService.lxrlist();
		model.addAttribute("lxrlist", lxrlist);
		//随机数绑定
		Random random = new Random();  
		long blnumber=new Date().getTime();  
		String number="BL"+String.valueOf(blnumber);
		for (int i=0;i<4;i++)  
		{  
			number+=random.nextInt(10);  
		} 
		model.addAttribute("blnumber", number);
		return "huanzhedj";
	}
	/**
	 * 三级联动绑定
	 * @param parentId
	 * @return
	 */
	@RequestMapping("Chinainfo.html")
	@ResponseBody
	public Object Chinainfo(int parentId) {
		List<China> chinalist=chinaService.listall(parentId);
		return chinalist;
	}
	/**
	 * 二级联动绑定医生
	 * @param parentId
	 * @return
	 */
	@RequestMapping("yisheng.html")
	@ResponseBody
	public Object yisheng(int parentId) {
		List<Denglub> list=denglubService.listkeshi(parentId);
		return list;
	}
	/**
	 * 点击是否绑定过敏史
	 * @return
	 */
	@RequestMapping("gms.html")
	@ResponseBody
	public Object gms() {
		List<Guominshib> gmlist=guominService.listAll();
		return gmlist;
	}
	/**
	 * 点击是否绑定既往史
	 * @return
	 */
	@RequestMapping("jws.html")
	@ResponseBody
	public Object jws() {
		List<Jiwangshib> gmlist=jiwangService.listAll();
		return gmlist;
	}
	
	/**
	 * 添加患者信息
	 * @param hzxxb
	 * @param hzxx
	 * @param addressx
	 * @return
	 */
	@RequestMapping("addhuanzhe.html")
	@ResponseBody
	public Object addhuanzhe(Huanzhexiangxib hzxxb,Huanzhexinxib hzxx,String addressx) {
		Date d = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  //当前时间
		hzxxb.setJztime(sdf.format(d));
		hzxxb.setJiuzhencount(1);
		hzxxb.setJzstatus(1);
		hzxiangxiService.insertSelective(hzxxb);
		int hzid=hzxiangxiService.selectId();
		hzxx.setHuanzheid(hzid);
		String add=addressx;
		add+=hzxx.getAddressxx();
		hzxx.setAddressxx(add);
		hzxx.setLxrtypeid(1);
		int num= huanzheService.insertSelective(hzxx);
		return num;
	}
}
