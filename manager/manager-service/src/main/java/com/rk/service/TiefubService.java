package com.rk.service;

import com.rk.entity.Tiefub;

public interface TiefubService {
    int deleteByPrimaryKey(Integer tfid);

    int insert(Tiefub record);

    int insertSelective(Tiefub record);

    Tiefub selectByPrimaryKey(Integer tfid);

    int updateByPrimaryKeySelective(Tiefub record);

    int updateByPrimaryKey(Tiefub record);
}