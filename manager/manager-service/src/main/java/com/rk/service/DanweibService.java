package com.rk.service;

import com.rk.entity.Danweib;

public interface DanweibService {
    int deleteByPrimaryKey(Integer dwid);

    int insert(Danweib record);

    int insertSelective(Danweib record);

    Danweib selectByPrimaryKey(Integer dwid);

    int updateByPrimaryKeySelective(Danweib record);

    int updateByPrimaryKey(Danweib record);
}