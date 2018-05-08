package com.rk.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.HuanzhexinxibMapper;
import com.rk.entity.Huanzhexinxib;

@Service("huanzhexinxibService")
public class HuanzhexinxibServiceImpl implements HuanzhexinxibService {
	
	@Autowired
	private HuanzhexinxibMapper dao;
	@Override
	public int deleteByPrimaryKey(Integer hzxxid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Huanzhexinxib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Huanzhexinxib record) {
		// TODO Auto-generated method stub
		return dao.insertSelective(record);
	}

	@Override
	public Huanzhexinxib selectByPrimaryKey(Integer hzxxid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Huanzhexinxib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Huanzhexinxib record) {
		// TODO Auto-generated method stub
		return 0;
	}

}
