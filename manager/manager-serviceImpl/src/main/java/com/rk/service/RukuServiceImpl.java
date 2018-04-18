package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.RukubMapper;
import com.rk.entity.Rukub;
@Service("rukubService")
public class RukuServiceImpl implements RukubService {

	@Autowired
	
	private RukubMapper rkdao;
	@Override
	public int deleteByPrimaryKey(Integer rkid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Rukub record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Rukub record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Rukub selectByPrimaryKey(Integer rkid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Rukub record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Rukub record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Rukub> Gellrk() {
		// TODO Auto-generated method stub
		return rkdao.Gellrk();
	}

}
