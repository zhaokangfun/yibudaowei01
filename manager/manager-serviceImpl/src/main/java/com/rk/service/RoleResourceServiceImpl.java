package com.rk.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.RoleResourceMapper;
import com.rk.entity.RoleResource;

@Service("roleResourceService")
public class RoleResourceServiceImpl implements RoleResourceService {
	
	@Autowired
	private RoleResourceMapper roleResourceMapper;

	@Override
	public int insert(RoleResource record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(RoleResource record) {
		return roleResourceMapper.insertSelective(record);
	}

}
