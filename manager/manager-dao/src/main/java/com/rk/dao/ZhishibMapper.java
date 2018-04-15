package com.rk.dao;

import com.rk.entity.Zhishib;

public interface ZhishibMapper {
    int deleteByPrimaryKey(Integer zsid);

    int insert(Zhishib record);

    int insertSelective(Zhishib record);

    Zhishib selectByPrimaryKey(Integer zsid);

    int updateByPrimaryKeySelective(Zhishib record);

    int updateByPrimaryKey(Zhishib record);
}