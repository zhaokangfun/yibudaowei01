package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.YongfabMapper;
import com.rk.entity.Yongfab;

@Service("yongfabService")
public class YongfabServiceImpl implements YongfabService {

	@Autowired
	private YongfabMapper yfdao;

	@Override
	public int deleteByPrimaryKey(Integer yfid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Yongfab record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Yongfab record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Yongfab selectByPrimaryKey(Integer yfid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Yongfab record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Yongfab record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Yongfab> Gellyf() {
		// TODO Auto-generated method stub
		return yfdao.Gellyf();
	}
}
