package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.DanweibMapper;
import com.rk.entity.Danweib;

@Service("danweibService")
public class DanweiServiceImpl implements DanweibService {

	@Autowired
	private DanweibMapper dwdao;
	
	@Override
	public int deleteByPrimaryKey(Integer dwid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Danweib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Danweib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Danweib selectByPrimaryKey(Integer dwid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Danweib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Danweib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Danweib> Gelldw() {
		// TODO Auto-generated method stub
		return dwdao.Gelldw();
	}

}
