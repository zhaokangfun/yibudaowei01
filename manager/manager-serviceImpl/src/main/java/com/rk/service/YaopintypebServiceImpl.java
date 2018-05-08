package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.YaopintypebMapper;
import com.rk.entity.Yaopintypeb;

@Service("yaopintypebService")
public class YaopintypebServiceImpl implements YaopintypebService {

	@Autowired
	private YaopintypebMapper ypdao;
	@Override
	public int deleteByPrimaryKey(Integer yptypeid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Yaopintypeb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Yaopintypeb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Yaopintypeb selectByPrimaryKey(Integer yptypeid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Yaopintypeb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Yaopintypeb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Yaopintypeb> Gellyptype() {
		// TODO Auto-generated method stub
		return ypdao.Gellyptype();
	}

	@Override
	public int maxid() {
		// TODO Auto-generated method stub
		return ypdao.maxid();
	}

	@Override
	public Yaopintypeb idselect(int yptypeid) {
		// TODO Auto-generated method stub
		return ypdao.idselect(yptypeid);
	}

	@Override
	public int yptypeadd(Yaopintypeb record) {
		// TODO Auto-generated method stub
		return ypdao.yptypeadd(record);
	}

}
