package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.GuominshibMapper;
import com.rk.entity.Guominshib;

@Service("guominshibService")
public class GuoMinShibServiceImpl implements  GuominshibService
{

	@Autowired
	private GuominshibMapper dao;
	
	@Override
	public int deleteByPrimaryKey(Integer gmsid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Guominshib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Guominshib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Guominshib selectByPrimaryKey(Integer gmsid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Guominshib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Guominshib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Guominshib> listAll() {
		// TODO Auto-generated method stub
		return dao.listAll();
	}

}
