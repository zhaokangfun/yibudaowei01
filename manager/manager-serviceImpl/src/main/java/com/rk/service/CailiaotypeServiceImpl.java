package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.CailiaotypebMapper;
import com.rk.entity.Cailiaotypeb;

@Service("cailiaotypebService")
public class CailiaotypeServiceImpl implements CailiaotypebService {

	@Autowired
	private CailiaotypebMapper cldao;
	@Override
	public int deleteByPrimaryKey(Integer cltypeid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Cailiaotypeb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Cailiaotypeb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Cailiaotypeb selectByPrimaryKey(Integer cltypeid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Cailiaotypeb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Cailiaotypeb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Cailiaotypeb> Gellcltype() {
		// TODO Auto-generated method stub
		return cldao.Gellcltype();
	}

}
