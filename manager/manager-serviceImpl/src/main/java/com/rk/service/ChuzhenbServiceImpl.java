package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.ChuzhenbMapper;
import com.rk.entity.Chuzhenb;

@Service("chuzhenbService")
public class ChuzhenbServiceImpl implements ChuzhenbService{

	@Autowired
	private ChuzhenbMapper dao;
	
	@Override
	public int deleteByPrimaryKey(Integer czid) {
		// TODO Auto-generated method stub
		return dao.deleteByPrimaryKey(czid);
	}

	@Override
	public int insert(Chuzhenb record) {
		// TODO Auto-generated method stub
		return dao.insert(record);
	}

	@Override
	public int insertSelective(Chuzhenb record) {
		// TODO Auto-generated method stub
		return dao.insertSelective(record);
	}

	@Override
	public Chuzhenb selectByPrimaryKey(Integer czid) {
		// TODO Auto-generated method stub
		return dao.selectByPrimaryKey(czid);
	}

	@Override
	public int updateByPrimaryKeySelective(Chuzhenb record) {
		// TODO Auto-generated method stub
		return dao.updateByPrimaryKeySelective(record);
	}

	@Override
	public int updateByPrimaryKey(Chuzhenb record) {
		// TODO Auto-generated method stub
		return dao.updateByPrimaryKey(record);
	}

	@Override
	public List<Chuzhenb> listAll() {
		// TODO Auto-generated method stub
		return dao.listAll();
	}

}
