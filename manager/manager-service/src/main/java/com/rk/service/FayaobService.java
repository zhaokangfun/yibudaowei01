package com.rk.service;

import com.rk.entity.Fayaob;

public interface FayaobService {
    int deleteByPrimaryKey(Integer fyid);

    int insert(Fayaob record);

    int insertSelective(Fayaob record);

    Fayaob selectByPrimaryKey(Integer fyid);

    int updateByPrimaryKeySelective(Fayaob record);

    int updateByPrimaryKey(Fayaob record);
}