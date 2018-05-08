package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.ZhengjianlleixingbMapper;
import com.rk.entity.Zhengjianlleixingb;
@Service("zhengjianlleixingbService")
public class ZhengjianleixingServiceImpl implements ZhengjianlleixingbService {
	@Autowired
	private ZhengjianlleixingbMapper zhengjianDao;
	@Override
	public int deleteByPrimaryKey(Integer zjtypeid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Zhengjianlleixingb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Zhengjianlleixingb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Zhengjianlleixingb selectByPrimaryKey(Integer zjtypeid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Zhengjianlleixingb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Zhengjianlleixingb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Zhengjianlleixingb> list() {
		// TODO Auto-generated method stub
		return zhengjianDao.list();
	}

}
