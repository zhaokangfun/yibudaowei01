package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.YuyuehcbMapper;
import com.rk.entity.Yuyuehcb;
@Service("yuyuehcbService")
public class YuYuehcbServiceImpl implements YuyuehcbService {
	@Autowired
	private YuyuehcbMapper yuyueDao;
	@Override
	public int deleteByPrimaryKey(Integer yyhcid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Yuyuehcb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Yuyuehcb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Yuyuehcb selectByPrimaryKey(Integer yyhcid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateBy(Yuyuehcb record) {
		// TODO Auto-generated method stub
		return yuyueDao.updateBy(record);
	}

	@Override
	public int updateByPrimaryKey(Yuyuehcb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Yuyuehcb> listAll() {
		// TODO Auto-generated method stub
		return yuyueDao.listAll();
	}

}
