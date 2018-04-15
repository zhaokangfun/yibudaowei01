package com.rk.service;

import com.rk.entity.Xuelib;

public interface XuelibService {
    int deleteByPrimaryKey(Integer xueliid);

    int insert(Xuelib record);

    int insertSelective(Xuelib record);

    Xuelib selectByPrimaryKey(Integer xueliid);

    int updateByPrimaryKeySelective(Xuelib record);

    int updateByPrimaryKey(Xuelib record);
}