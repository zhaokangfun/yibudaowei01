package com.rk.service;

import com.rk.entity.Buweib;

public interface BuweibService {
    int deleteByPrimaryKey(Integer buweiid);

    int insert(Buweib record);

    int insertSelective(Buweib record);

    Buweib selectByPrimaryKey(Integer buweiid);

    int updateByPrimaryKeySelective(Buweib record);

    int updateByPrimaryKey(Buweib record);
}