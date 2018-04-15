package com.rk.service;

import com.rk.entity.Zhenjiub;

public interface ZhenjiubService {
    int deleteByPrimaryKey(Integer zjid);

    int insert(Zhenjiub record);

    int insertSelective(Zhenjiub record);

    Zhenjiub selectByPrimaryKey(Integer zjid);

    int updateByPrimaryKeySelective(Zhenjiub record);

    int updateByPrimaryKey(Zhenjiub record);
}