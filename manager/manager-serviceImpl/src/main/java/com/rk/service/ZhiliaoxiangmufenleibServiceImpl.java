package com.rk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.dao.ZhiliaoxiangmufenleibMapper;
import com.rk.entity.Zhiliaoxiangmufenleib;
@Service("zhiliaoxiangmufenleibService")
public class ZhiliaoxiangmufenleibServiceImpl implements ZhiliaoxiangmufenleibService {

	@Autowired
	private ZhiliaoxiangmufenleibMapper zlfldao;
	@Override
	public int deleteByPrimaryKey(Integer zkxmtypeid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Zhiliaoxiangmufenleib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Zhiliaoxiangmufenleib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Zhiliaoxiangmufenleib selectByPrimaryKey(Integer zkxmtypeid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByPrimaryKeySelective(Zhiliaoxiangmufenleib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Zhiliaoxiangmufenleib record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Zhiliaoxiangmufenleib> Gellzlxm() {
		// TODO Auto-generated method stub
		return zlfldao.Gellzlxm();
	}

	@Override
	public int typeadd(Zhiliaoxiangmufenleib record) {
		// TODO Auto-generated method stub
		return zlfldao.typeadd(record);
	}

	@Override
	public int idgell() {
		// TODO Auto-generated method stub
		return zlfldao.idgell();
	}

	@Override
	public Zhiliaoxiangmufenleib idselect(int zkxmtypeid) {
		// TODO Auto-generated method stub
		return zlfldao.idselect(zkxmtypeid);
	}

}
