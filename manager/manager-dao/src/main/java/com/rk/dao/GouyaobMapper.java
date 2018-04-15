package com.rk.dao;

import com.rk.entity.Gouyaob;

public interface GouyaobMapper {
    int deleteByPrimaryKey(Integer gyid);

    int insert(Gouyaob record);

    int insertSelective(Gouyaob record);

    Gouyaob selectByPrimaryKey(Integer gyid);

    int updateByPrimaryKeySelective(Gouyaob record);

    int updateByPrimaryKey(Gouyaob record);
}