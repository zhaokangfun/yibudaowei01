package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.JixingbMapper;
import com.rk.entity.Jixingb;

@Service("jixingbService")
public class JixingServiceImpl implements JixingbService {

	@Autowired
	private JixingbMapper jxdao;

	@Override
	public int deleteByPrimaryKey(Integer jxid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Jixingb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Jixingb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Jixingb selectByPrimaryKey(Integer jxid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Jixingb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Jixingb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Jixingb> Gelljx() {
		// TODO Auto-generated method stub
		return jxdao.Gelljx();
	}
	
	
}
