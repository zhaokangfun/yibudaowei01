package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.JiwangshibMapper;
import com.rk.entity.Jiwangshib;

@Service("jiwangshibService")
public class JiwangshibServiceImpl implements JiwangshibService
{
	@Autowired
	private JiwangshibMapper dao;

	@Override
	public int deleteByPrimaryKey(Integer jwsid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Jiwangshib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Jiwangshib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Jiwangshib selectByPrimaryKey(Integer jwsid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Jiwangshib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Jiwangshib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Jiwangshib> listAll() {
		// TODO Auto-generated method stub
		return dao.listAll();
	}

}
