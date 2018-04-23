package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.KeshibMapper;
import com.rk.entity.Keshib;

@Service("keshibService")
public class KeshibServiceImpl implements KeshibService {

	@Autowired
	private KeshibMapper keshibmapper;
	
	@Override
	public int deleteByPrimaryKey(Integer keshiid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Keshib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Keshib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Keshib selectByPrimaryKey(Integer keshiid) {
		return keshibmapper.selectByPrimaryKey(keshiid);
	}

	@Override
	public int updateByPrimaryKeySelective(Keshib record) {
		return keshibmapper.updateByPrimaryKeySelective(record);
	}

	@Override
	public int updateByPrimaryKey(Keshib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Keshib> getAll() {
		return keshibmapper.getAll();
	}

	@Override
	public List<Keshib> getKeshiByYuYueStatus(Integer yuyuestatus) {
		return keshibmapper.getKeshiByYuYueStatus(yuyuestatus);
	}

}
