package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.XuexingbMapper;
import com.rk.entity.Xuexingb;
@Service("xuexingbService")
public class XuexingServiceImpl implements XuexingbService {

	@Autowired
	private XuexingbMapper xueDao;
	@Override
	public int deleteByPrimaryKey(Integer xuexingid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Xuexingb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Xuexingb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Xuexingb selectByPrimaryKey(Integer xuexingid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Xuexingb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Xuexingb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Xuexingb> list() {
		// TODO Auto-generated method stub
		return xueDao.list();
	}

}
