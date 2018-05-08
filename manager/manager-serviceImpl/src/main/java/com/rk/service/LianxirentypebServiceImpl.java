package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.LianxirentypebMapper;
import com.rk.entity.Lianxirentypeb;
@Service("lianxirentypebService")
public class LianxirentypebServiceImpl implements LianxirentypebService {
	@Autowired
	private LianxirentypebMapper dao;
	@Override
	public int deleteByPrimaryKey(Integer lxrtypeid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Lianxirentypeb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Lianxirentypeb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Lianxirentypeb selectByPrimaryKey(Integer lxrtypeid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Lianxirentypeb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Lianxirentypeb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Lianxirentypeb> lxrlist() {
		// TODO Auto-generated method stub
		return dao.lxrlist();
	}

}
