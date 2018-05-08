package com.rk.service;

import java.util.List;

import com.rk.entity.Zhiliaoxiangmufenleib;

public interface ZhiliaoxiangmufenleibService {
    int deleteByPrimaryKey(Integer zkxmtypeid);

    int insert(Zhiliaoxiangmufenleib record);

    int insertSelective(Zhiliaoxiangmufenleib record);

    Zhiliaoxiangmufenleib selectByPrimaryKey(Integer zkxmtypeid);

    int updateByPrimaryKeySelective(Zhiliaoxiangmufenleib record);

    int updateByPrimaryKey(Zhiliaoxiangmufenleib record);
    
    List<Zhiliaoxiangmufenleib> Gellzlxm();
    
    int typeadd(Zhiliaoxiangmufenleib record);
    
    int idgell();
    
    Zhiliaoxiangmufenleib idselect(int zkxmtypeid);
}