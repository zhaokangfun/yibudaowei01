package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.BancibMapper;
import com.rk.entity.Bancib;

@Service("bancibService")
public class BancibServiceImpl implements BancibService {
	@Autowired
	private BancibMapper bancibMapper;
	
	public int deleteByPrimaryKey(Integer banciid) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int insert(Bancib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int insertSelective(Bancib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	public Bancib selectByPrimaryKey(Integer banciid) {
		// TODO Auto-generated method stub
		return null;
	}

	public int updateByPrimaryKeySelective(Bancib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int updateByPrimaryKey(Bancib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	public List<Bancib> getAll() {
		return bancibMapper.getAll();
	}
    
}