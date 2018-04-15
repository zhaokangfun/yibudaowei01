package com.rk.dao;

import com.rk.entity.Tiefub;

public interface TiefubMapper {
    int deleteByPrimaryKey(Integer tfid);

    int insert(Tiefub record);

    int insertSelective(Tiefub record);

    Tiefub selectByPrimaryKey(Integer tfid);

    int updateByPrimaryKeySelective(Tiefub record);

    int updateByPrimaryKey(Tiefub record);
}