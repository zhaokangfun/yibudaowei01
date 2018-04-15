package com.rk.service;

import com.rk.entity.Keshib;

public interface KeshibService {
    int deleteByPrimaryKey(Integer keshiid);

    int insert(Keshib record);

    int insertSelective(Keshib record);

    Keshib selectByPrimaryKey(Integer keshiid);

    int updateByPrimaryKeySelective(Keshib record);

    int updateByPrimaryKey(Keshib record);
}