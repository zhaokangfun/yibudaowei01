package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.BancibMapper;
import com.rk.entity.Bancib;

@Service("bancibService")
public class BancibServiceImpl implements BancibService {
	@Autowired
	private BancibMapper dao;
	
	public int deleteByPrimaryKey(Integer banciid) {
		// TODO Auto-generated method stub
		return dao.deleteByPrimaryKey(banciid);
	}

	public int insert(Bancib record) {
		// TODO Auto-generated method stub
		return dao.insert(record);
	}

	public int insertSelective(Bancib record) {
		// TODO Auto-generated method stub
		return dao.insertSelective(record);
	}

	public Bancib selectByPrimaryKey(Integer banciid) {
		// TODO Auto-generated method stub
		return dao.selectByPrimaryKey(banciid);
	}

	public int updateByPrimaryKeySelective(Bancib record) {
		// TODO Auto-generated method stub
		return dao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Bancib record) {
		// TODO Auto-generated method stub
		return dao.updateByPrimaryKey(record);
	}

	public List<Bancib> getAll() {
		return dao.getAll();
	}
    
}