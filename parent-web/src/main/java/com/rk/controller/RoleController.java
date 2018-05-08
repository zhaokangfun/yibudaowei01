package com.rk.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rk.entity.Resource;
import com.rk.entity.RoleResource;
import com.rk.entity.Roleb;
import com.rk.service.ResourceService;
import com.rk.service.RoleResourceService;
import com.rk.service.RolebService;

/**
 * 角色控制器
 * @author Lxy
 *
 */
@Controller
@RequestMapping("role")
public class RoleController {
	//角色
	@Autowired
	private RolebService rolebService;
	//权限
	@Autowired
	private ResourceService resourceService;
	//角色权限的中间表
	@Autowired
	private RoleResourceService roleResourceService;
	/**
	 * 角色页面的跳转
	 * @param model 存储角色列表，往前台绑定
	 * @return
	 */
	@RequestMapping("/Role.html")
	public String goRole(Model model) {
		List<Roleb> list= rolebService.getAll();
		List<Resource> lists=resourceService.getAll();
		model.addAttribute("resource", lists);
		model.addAttribute("role", list);
		return "role";
	}
	/**
	 * 角色的添加
	 * @param rolename	角色名称
	 * @param resList	权限数据	 
	 * @return
	 */
	@RequestMapping("/addrole")
	@ResponseBody
	public int addRole(String rolename,String resList) {
		Roleb record=new Roleb();
		record.setRolename(rolename);
		record.setStatus(1);
		Date now=new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		record.setCreatetime(formatter.format(now));
		int num=rolebService.insertSelective(record);	//先添加角色
		int sum=0;
		if(num>0) {	//如果添加成功的话则添加权限
			int id=rolebService.selMaxid();	//返回他的id
			String[] arryList=resList.split(","); //分割他的权限
			for (String resId : arryList) {	//遍历
				RoleResource r=new RoleResource();
				r.setRoleid(id);
				r.setResourceid(Integer.parseInt(resId));
				sum=roleResourceService.insertSelective(r);
			}	
		}
		return sum;
	}
}
