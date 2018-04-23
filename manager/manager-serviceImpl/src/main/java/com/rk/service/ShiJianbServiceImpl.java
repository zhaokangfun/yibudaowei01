package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.ShijianduanbMapper;
import com.rk.entity.Shijianduanb;
@Service("shijianduanbService")
public class ShiJianbServiceImpl implements ShijianduanbService {
	@Autowired
	private ShijianduanbMapper shijianDao;
	
	@Override
	public int deleteByPrimaryKey(Integer shijianduanid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Shijianduanb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Shijianduanb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Shijianduanb selectByPrimaryKey(Integer shijianduanid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Shijianduanb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Shijianduanb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Shijianduanb> AllList() {
		return shijianDao.AllList();
	}

}
