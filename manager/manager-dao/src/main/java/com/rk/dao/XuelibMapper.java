package com.rk.dao;

import com.rk.entity.Xuelib;

public interface XuelibMapper {
    int deleteByPrimaryKey(Integer xueliid);

    int insert(Xuelib record);

    int insertSelective(Xuelib record);

    Xuelib selectByPrimaryKey(Integer xueliid);

    int updateByPrimaryKeySelective(Xuelib record);

    int updateByPrimaryKey(Xuelib record);
}