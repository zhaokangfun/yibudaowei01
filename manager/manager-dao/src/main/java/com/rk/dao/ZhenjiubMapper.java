package com.rk.dao;

import com.rk.entity.Zhenjiub;

public interface ZhenjiubMapper {
    int deleteByPrimaryKey(Integer zjid);

    int insert(Zhenjiub record);

    int insertSelective(Zhenjiub record);

    Zhenjiub selectByPrimaryKey(Integer zjid);

    int updateByPrimaryKeySelective(Zhenjiub record);

    int updateByPrimaryKey(Zhenjiub record);
}