package com.rk.dao;

import com.rk.entity.Zhiliaoxiangmufenleib;

public interface ZhiliaoxiangmufenleibMapper {
    int deleteByPrimaryKey(Integer zkxmtypeid);

    int insert(Zhiliaoxiangmufenleib record);

    int insertSelective(Zhiliaoxiangmufenleib record);

    Zhiliaoxiangmufenleib selectByPrimaryKey(Integer zkxmtypeid);

    int updateByPrimaryKeySelective(Zhiliaoxiangmufenleib record);

    int updateByPrimaryKey(Zhiliaoxiangmufenleib record);
}