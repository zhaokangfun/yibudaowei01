package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.ZhongyaobMapper;
import com.rk.entity.Zhongyaob;

@Service("zhongyaobService")
public class ZhongyaoServiceImpl implements ZhongyaobService {

	@Autowired
	private ZhongyaobMapper zydao;
	@Override
	public int deleteByPrimaryKey(Integer zyid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Zhongyaob record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Zhongyaob record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Zhongyaob selectByPrimaryKey(Integer zyid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Zhongyaob record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Zhongyaob record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Zhongyaob> Gellzy() {
		// TODO Auto-generated method stub
		return zydao.Gellzy();
	}

	@Override
	public int addzy(Zhongyaob zy) {
		// TODO Auto-generated method stub
		return zydao.addzy(zy);
	}

}
