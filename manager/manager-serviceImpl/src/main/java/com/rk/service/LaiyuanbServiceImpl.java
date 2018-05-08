package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.LaiyuanbMapper;
import com.rk.entity.Laiyuanb;
@Service("laiyuanbService")
public class LaiyuanbServiceImpl implements LaiyuanbService {
	@Autowired
	private LaiyuanbMapper laiyuanDao;
	@Override
	public int deleteByPrimaryKey(Integer lyid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Laiyuanb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Laiyuanb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Laiyuanb selectByPrimaryKey(Integer lyid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Laiyuanb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Laiyuanb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Laiyuanb> listall() {
		// TODO Auto-generated method stub
		return laiyuanDao.listall();
	}

}
