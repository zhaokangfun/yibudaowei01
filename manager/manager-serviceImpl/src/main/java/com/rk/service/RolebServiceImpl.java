package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.RolebMapper;
import com.rk.entity.Roleb;

@Service("rolebService")
public class RolebServiceImpl implements RolebService {

	@Autowired
	private RolebMapper roleMapper;
	
	@Override
	public int deleteByPrimaryKey(Integer roleid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Roleb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Roleb record) {
		return roleMapper.insertSelective(record);
	}

	@Override
	public Roleb selectByPrimaryKey(Integer roleid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Roleb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Roleb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Roleb> getAll() {
		return roleMapper.getAll();
	}

	@Override
	public int selMaxid() {
		return roleMapper.selMaxid();
	}
	 
}
