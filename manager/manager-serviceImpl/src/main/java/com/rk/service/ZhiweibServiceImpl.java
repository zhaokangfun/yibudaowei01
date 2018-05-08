package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.ZhiweibMapper;
import com.rk.entity.Zhiweib;

@Service("zhiweibService")
public class ZhiweibServiceImpl implements ZhiweibService {

	@Autowired
	
	private ZhiweibMapper zwdao;

	@Override
	public int deleteByPrimaryKey(Integer zhiweiid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Zhiweib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Zhiweib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Zhiweib selectByPrimaryKey(Integer zhiweiid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Zhiweib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Zhiweib record) {
		// TODO Auto-generated method stub
		return 0;
	}


	@Override
	public int addzw(Zhiweib zw) {
		// TODO Auto-generated method stub
		return zwdao.addzw(zw);
	}

	@Override
	public List<Zhiweib> Gellyszhiwei() {
		// TODO Auto-generated method stub
		return zwdao.Gellyszhiwei();
	}

	@Override
	public List<Zhiweib> qiyong() {
		// TODO Auto-generated method stub
		return zwdao.qiyong();
	}

	@Override
	public List<Zhiweib> jinyong() {
		// TODO Auto-generated method stub
		return zwdao.jinyong();
	}
}
