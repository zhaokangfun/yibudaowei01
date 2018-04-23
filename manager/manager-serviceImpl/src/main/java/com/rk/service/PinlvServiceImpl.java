package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.PinlvbMapper;
import com.rk.entity.Pinlvb;

@Service("pinlvbService")
public class PinlvServiceImpl implements PinlvbService {

	@Autowired
	private PinlvbMapper pldao;

	@Override
	public int deleteByPrimaryKey(Integer plid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Pinlvb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Pinlvb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Pinlvb selectByPrimaryKey(Integer plid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Pinlvb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Pinlvb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Pinlvb> Gellpl() {
		// TODO Auto-generated method stub
		return pldao.Gellpl();
	}
}
