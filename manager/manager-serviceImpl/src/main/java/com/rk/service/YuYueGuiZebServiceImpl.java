package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.YuyueguizebMapper;
import com.rk.entity.Yuyueguizeb;
@Service("yuyueguizebService")
public class YuYueGuiZebServiceImpl implements YuyueguizebService {

	@Autowired
	private YuyueguizebMapper yuyueDao;
	@Override
	public int deleteByPrimaryKey(Integer yygzid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Yuyueguizeb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Yuyueguizeb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Yuyueguizeb selectByPrimaryKey(Integer yygzid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateBy(String zhi, int id) {
		// TODO Auto-generated method stub
		return yuyueDao.updateBy(zhi, id);
	}

	@Override
	public int updateByPrimaryKey(Yuyueguizeb record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Yuyueguizeb> SelectAll() {
		// TODO Auto-generated method stub
		return yuyueDao.SelectAll();
	}

}
