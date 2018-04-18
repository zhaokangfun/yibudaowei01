package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.JichuhechengbMapper;
import com.rk.entity.Jichufuleib;
import com.rk.entity.Jichuhechengb;

@Service("jichuhechengbService")
public class jichuhechengbServiceImpl implements JichuhechengbService {

	@Autowired
	private JichuhechengbMapper jichuDao;
	@Override
	public int deleteByPrimaryKey(Integer jchcid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Jichuhechengb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Jichuhechengb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Jichuhechengb selectByPrimaryKey(Integer jchcid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Jichuhechengb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Jichuhechengb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Jichuhechengb> SelectAll() {
		
		return jichuDao.SelectAll();
	}

}
