package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.XiyaozhongchengyaobMapper;
import com.rk.entity.Xiyaozhongchengyaob;

@Service("xiyaozhongchengyaobService")
public class XiyaozhongchengServiceImpl implements XiyaozhongchengyaobService {

	@Autowired
	private XiyaozhongchengyaobMapper xdao;

	@Override
	public int deleteByPrimaryKey(Integer xyid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Xiyaozhongchengyaob record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Xiyaozhongchengyaob record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Xiyaozhongchengyaob selectByPrimaryKey(Integer xyid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Xiyaozhongchengyaob record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Xiyaozhongchengyaob record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Xiyaozhongchengyaob> Gellxizhong() {
		// TODO Auto-generated method stub
		return xdao.Gellxizhong();
	}

	@Override
	public int xizhongadd(Xiyaozhongchengyaob xz) {
		// TODO Auto-generated method stub
		return xdao.xizhongadd(xz);
	}

	
}
