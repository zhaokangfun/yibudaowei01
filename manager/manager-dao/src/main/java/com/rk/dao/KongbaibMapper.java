package com.rk.dao;

import com.rk.entity.Kongbaib;

public interface KongbaibMapper {
    int deleteByPrimaryKey(Integer kbid);

    int insert(Kongbaib record);

    int insertSelective(Kongbaib record);

    Kongbaib selectByPrimaryKey(Integer kbid);

    int updateByPrimaryKeySelective(Kongbaib record);

    int updateByPrimaryKey(Kongbaib record);
}