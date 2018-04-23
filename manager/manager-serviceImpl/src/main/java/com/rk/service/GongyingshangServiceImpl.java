package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.GongyingshangbMapper;
import com.rk.entity.Gongyingshangb;

@Service("gongyingshangbService")
public class GongyingshangServiceImpl implements GongyingshangbService {

	@Autowired
	private GongyingshangbMapper gongyingdao;

	@Override
	public int deleteByPrimaryKey(Integer gysid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Gongyingshangb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Gongyingshangb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Gongyingshangb selectByPrimaryKey(Integer gysid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Gongyingshangb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Gongyingshangb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Gongyingshangb> gysGell() {
		// TODO Auto-generated method stub
		return gongyingdao.gysGell();
	}
	
	
}
