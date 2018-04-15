package com.rk.dao;

import com.rk.entity.Fayaob;

public interface FayaobMapper {
    int deleteByPrimaryKey(Integer fyid);

    int insert(Fayaob record);

    int insertSelective(Fayaob record);

    Fayaob selectByPrimaryKey(Integer fyid);

    int updateByPrimaryKeySelective(Fayaob record);

    int updateByPrimaryKey(Fayaob record);
}