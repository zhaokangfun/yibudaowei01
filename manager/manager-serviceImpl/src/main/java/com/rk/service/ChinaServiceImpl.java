package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.ChinaMapper;
import com.rk.entity.China;
@Service("chinaService")
public class ChinaServiceImpl implements ChinaService {
	@Autowired
	private ChinaMapper chinaDao;
	@Override
	public List<China> listall(int pid) {
		return chinaDao.listall(pid);
	}

}
