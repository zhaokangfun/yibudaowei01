package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.ZhiliaoxiangmubMapper;
import com.rk.entity.Zhiliaoxiangmub;

@Service("zhiliaoxiangmubService")
public class zhiliaoxiangmubServiceImpl implements ZhiliaoxiangmubService {

	@Autowired
	private ZhiliaoxiangmubMapper zldao;
	@Override
	public int deleteByPrimaryKey(Integer zlxmid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Zhiliaoxiangmub record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Zhiliaoxiangmub record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Zhiliaoxiangmub selectByPrimaryKey(Integer zlxmid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Zhiliaoxiangmub record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Zhiliaoxiangmub record) {
		// TODO Auto-generated method stub
		return 0;
	}

	/**
	 * 治疗项目信息
	 */
	@Override
	public List<Zhiliaoxiangmub> Gellzllist() {
		// TODO Auto-generated method stub
		return zldao.Gellzllist();
	}

	@Override
	public int addzlxm(Zhiliaoxiangmub zlxmb) {
		// TODO Auto-generated method stub
		return zldao.addzlxm(zlxmb);
	}

}
