package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.TigecheckbMapper;
import com.rk.entity.Tigecheckb;

@Service("tigecheckbService")
public class TigecheckbServiceImpl implements TigecheckbService {

	
	@Autowired
	private TigecheckbMapper dao;
	@Override
	public int deleteByPrimaryKey(Integer tigechekid) {
		// TODO Auto-generated method stub
		return dao.deleteByPrimaryKey(tigechekid);
	}

	@Override
	public int insert(Tigecheckb record) {
		// TODO Auto-generated method stub
		return dao.insert(record);
	}

	@Override
	public int insertSelective(Tigecheckb record) {
		// TODO Auto-generated method stub
		return dao.insertSelective(record);
	}

	@Override
	public Tigecheckb selectByPrimaryKey(Integer tigechekid) {
		// TODO Auto-generated method stub
		return dao.selectByPrimaryKey(tigechekid);
	}

	@Override
	public int updateByPrimaryKeySelective(Tigecheckb record) {
		// TODO Auto-generated method stub
		return dao.updateByPrimaryKeySelective(record);
	}

	@Override
	public int updateByPrimaryKey(Tigecheckb record) {
		// TODO Auto-generated method stub
		return dao.updateByPrimaryKey(record);
	}

	@Override
	public List<Tigecheckb> listAll() {
		// TODO Auto-generated method stub
		return dao.listAll();
	}

}
