package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.ResourceMapper;
import com.rk.entity.Resource;

@Service("resourceService")
public class ResourceServiceImpl implements ResourceService {

	@Autowired
	private ResourceMapper resourceMapper;
	
	@Override
	public int deleteByPrimaryKey(Integer resourceid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Resource record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Resource record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Resource selectByPrimaryKey(Integer resourceid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Resource record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Resource record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Resource> getAll() {
		return resourceMapper.getAll();
	}

}
