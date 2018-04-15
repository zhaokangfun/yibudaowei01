package com.rk.dao;

import com.rk.entity.Keshishuxing;

public interface KeshishuxingMapper {
    int deleteByPrimaryKey(Integer keshishuxingid);

    int insert(Keshishuxing record);

    int insertSelective(Keshishuxing record);

    Keshishuxing selectByPrimaryKey(Integer keshishuxingid);

    int updateByPrimaryKeySelective(Keshishuxing record);

    int updateByPrimaryKey(Keshishuxing record);
}