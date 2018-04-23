package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.JianfabMapper;
import com.rk.entity.Jianfab;

@Service("jianfabService")
public class JianfabServiceImpl implements JianfabService {

	@Autowired
	private JianfabMapper jfdao;

	@Override
	public int deleteByPrimaryKey(Integer jianfaid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Jianfab record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Jianfab record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Jianfab selectByPrimaryKey(Integer jianfaid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Jianfab record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Jianfab record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Jianfab> jianfaGell() {
		// TODO Auto-generated method stub
		return jfdao.jianfaGell();
	}
	
	
}
