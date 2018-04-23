package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.HuanzhexiangxibMapper;
import com.rk.entity.Huanzhexiangxib;

@Service("huanzhexiangxibservice")
public class HuanzhexiangxibServiceImpl implements HuanzhexiangxibService {
	
	@Autowired
	private HuanzhexiangxibMapper dao;

	@Override
	public int deleteByPrimaryKey(Integer hzid) {
		// TODO Auto-generated method stub
		return dao.deleteByPrimaryKey(hzid);
	}

	@Override
	public int insert(Huanzhexiangxib record) {
		// TODO Auto-generated method stub
		return dao.insert(record);
	}

	@Override
	public int insertSelective(Huanzhexiangxib record) {
		// TODO Auto-generated method stub
		return dao.insertSelective(record);
	}

	@Override
	public Huanzhexiangxib selectByPrimaryKey(Integer hzid) {
		// TODO Auto-generated method stub
		return dao.selectByPrimaryKey(hzid);
	}

	@Override
	public int updateByPrimaryKeySelective(Huanzhexiangxib record) {
		// TODO Auto-generated method stub
		return dao.updateByPrimaryKeySelective(record);
	}

	@Override
	public int updateByPrimaryKey(Huanzhexiangxib record) {
		// TODO Auto-generated method stub
		return dao.updateByPrimaryKey(record);
	}

	@Override
	public List<Huanzhexiangxib> listOnjzStatics(Integer jzstatus) {
		// TODO Auto-generated method stub
		return dao.listOnjzStatics(jzstatus);
	}

	@Override
	public int updatebyhzStatus(Integer hzid, Integer status) {
		// TODO Auto-generated method stub
		return dao.updatebyhzStatus(hzid, status);
	}
	
	

}
