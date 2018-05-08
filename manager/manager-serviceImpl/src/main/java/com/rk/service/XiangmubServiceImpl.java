package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.XiangmubMapper;
import com.rk.entity.Xiangmub;

@Service("xiangmubService")
public class XiangmubServiceImpl implements XiangmubService {

	@Autowired
	private XiangmubMapper xmdao;
	
	@Override
	public int insert(Xiangmub record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Xiangmub record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Xiangmub> Gellzhxm(int zhlx) {
		// TODO Auto-generated method stub
		return xmdao.Gellzhxm(zhlx);
	}

}
