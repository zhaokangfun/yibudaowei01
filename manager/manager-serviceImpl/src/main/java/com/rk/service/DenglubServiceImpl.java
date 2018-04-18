package com.rk.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.DenglubMapper;
import com.rk.entity.Denglub;

@Service("denglubService")
public class DenglubServiceImpl implements DenglubService{

	@Autowired
	private DenglubMapper denglubMapper;
	
	@Override
	public int deleteByPrimaryKey(Integer adminid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Denglub record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Denglub record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Denglub selectByPrimaryKey(Integer adminid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Denglub record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Denglub record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Denglub dologin(String adminzh, String password) {
		return denglubMapper.dologin(adminzh, password);
	}

}
