package com.rk.service;

import com.rk.entity.Gouyaob;

public interface GouyaobService {
    int deleteByPrimaryKey(Integer gyid);

    int insert(Gouyaob record);

    int insertSelective(Gouyaob record);

    Gouyaob selectByPrimaryKey(Integer gyid);

    int updateByPrimaryKeySelective(Gouyaob record);

    int updateByPrimaryKey(Gouyaob record);
}