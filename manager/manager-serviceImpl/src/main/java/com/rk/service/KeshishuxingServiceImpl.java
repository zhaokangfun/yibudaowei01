package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.KeshishuxingMapper;
import com.rk.entity.Keshishuxing;

@Service("keshishuxingService")
public class KeshishuxingServiceImpl implements KeshishuxingService {
	
	@Autowired
	private KeshishuxingMapper keshishuxingMapper;

	@Override
	public int deleteByPrimaryKey(Integer keshishuxingid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Keshishuxing record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Keshishuxing record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Keshishuxing selectByPrimaryKey(Integer keshishuxingid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Keshishuxing record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Keshishuxing record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Keshishuxing> getAll() {
		return keshishuxingMapper.getAll();
	}

}
