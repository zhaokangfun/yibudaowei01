package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.DenglubMapper;
import com.rk.entity.Denglub;

@Service("denglubservice")
public class DengluServiceImpl  implements DenglubService
{
	
	@Autowired
	private DenglubMapper dao;

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
	public List<Denglub> listAll() {
		// TODO Auto-generated method stub
		return dao.listAll();
	}

	@Override
	public Denglub dologin(String adminzh, String password) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Denglub> listkeshi(int parentId) {
		return null;
	}

}
