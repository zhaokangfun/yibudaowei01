package com.rk.dao;

import com.rk.entity.Buweib;

public interface BuweibMapper {
    int deleteByPrimaryKey(Integer buweiid);

    int insert(Buweib record);

    int insertSelective(Buweib record);

    Buweib selectByPrimaryKey(Integer buweiid);

    int updateByPrimaryKeySelective(Buweib record);

    int updateByPrimaryKey(Buweib record);
}