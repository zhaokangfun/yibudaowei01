package com.rk.service;

import com.rk.entity.Zhishib;

public interface ZhishibService {
    int deleteByPrimaryKey(Integer zsid);

    int insert(Zhishib record);

    int insertSelective(Zhishib record);

    Zhishib selectByPrimaryKey(Integer zsid);

    int updateByPrimaryKeySelective(Zhishib record);

    int updateByPrimaryKey(Zhishib record);
}