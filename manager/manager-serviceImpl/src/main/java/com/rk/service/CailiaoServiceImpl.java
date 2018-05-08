package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.CailiaobMapper;
import com.rk.entity.Cailiaob;

@Service("cailiaobService")
public class CailiaoServiceImpl implements CailiaobService {

	@Autowired
	private CailiaobMapper cldao;
	@Override
	public int deleteByPrimaryKey(Integer clid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Cailiaob record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Cailiaob record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Cailiaob selectByPrimaryKey(Integer clid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Cailiaob record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Cailiaob record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Cailiaob> Gellcl() {
		// TODO Auto-generated method stub
		return cldao.Gellcl();
	}

	@Override
	public int addcailiao(Cailiaob cl) {
		// TODO Auto-generated method stub
		return cldao.addcailiao(cl);
	}

}
