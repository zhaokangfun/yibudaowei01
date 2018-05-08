package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.LaiyuanbMapper;
import com.rk.entity.Laiyuanb;


@Service("laiyuanbService")
public class LaiyuanbServiceImpl implements LaiyuanbService {

	@Autowired
	private LaiyuanbMapper lydao;
	
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
	public List<Laiyuanb> Gelllaiyuan() {
		// TODO Auto-generated method stub
		return lydao.Gelllaiyuan();
	}

	@Override
	public int lyadd(String lyname) {
		// TODO Auto-generated method stub
		return lydao.lyadd(lyname);
	}

	@Override
	public Laiyuanb ylidgell(int lyid) {
		// TODO Auto-generated method stub
		return lydao.ylidgell(lyid);
	}

	@Override
	public int idhq() {
		// TODO Auto-generated method stub
		return lydao.idhq();
	}

	@Override
	public List<Laiyuanb> listall() {
		// TODO Auto-generated method stub
		return null;
	}




}
