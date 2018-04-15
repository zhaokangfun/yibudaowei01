package com.rk.dao;

import com.rk.entity.Zhoub;

public interface ZhoubMapper {
    int deleteByPrimaryKey(Integer zhouid);

    int insert(Zhoub record);

    int insertSelective(Zhoub record);

    Zhoub selectByPrimaryKey(Integer zhouid);

    int updateByPrimaryKeySelective(Zhoub record);

    int updateByPrimaryKey(Zhoub record);
}