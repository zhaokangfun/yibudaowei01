package com.rk.dao;

import com.rk.entity.Keshib;

public interface KeshibMapper {
    int deleteByPrimaryKey(Integer keshiid);

    int insert(Keshib record);

    int insertSelective(Keshib record);

    Keshib selectByPrimaryKey(Integer keshiid);

    int updateByPrimaryKeySelective(Keshib record);

    int updateByPrimaryKey(Keshib record);
}