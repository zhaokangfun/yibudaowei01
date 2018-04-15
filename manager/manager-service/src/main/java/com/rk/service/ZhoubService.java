package com.rk.service;

import com.rk.entity.Zhoub;

public interface ZhoubService {
    int deleteByPrimaryKey(Integer zhouid);

    int insert(Zhoub record);

    int insertSelective(Zhoub record);

    Zhoub selectByPrimaryKey(Integer zhouid);

    int updateByPrimaryKeySelective(Zhoub record);

    int updateByPrimaryKey(Zhoub record);
}