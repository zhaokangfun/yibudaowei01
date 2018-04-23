package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.ShengchanshangbMapper;
import com.rk.entity.Shengchanshangb;

@Service("shengchanshangbService")
public class ShangchanServiceImpl implements ShengchanshangbService {

	@Autowired
	private ShengchanshangbMapper scdao;

	@Override
	public int deleteByPrimaryKey(Integer scsid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Shengchanshangb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Shengchanshangb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Shengchanshangb selectByPrimaryKey(Integer scsid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Shengchanshangb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Shengchanshangb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Shengchanshangb> sccsGell() {
		// TODO Auto-generated method stub
		return scdao.sccsGell();
	}
}
