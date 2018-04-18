package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.HuanzhexiangxibMapper;
import com.rk.entity.Huanzhexiangxib;

@Service("huanzhexiangxibservice")
public class HuanzhexiangxibServiceImpl implements HuanzhexiangxibService {
	
	@Autowired
	private HuanzhexiangxibMapper dao;

	@Override
	public int deleteByPrimaryKey(Integer hzid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Huanzhexiangxib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Huanzhexiangxib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Huanzhexiangxib selectByPrimaryKey(Integer hzid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Huanzhexiangxib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Huanzhexiangxib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Huanzhexiangxib> listOnjzStatics(Integer jzstatus) {
		// TODO Auto-generated method stub
		return dao.listOnjzStatics(jzstatus);
	}

}
