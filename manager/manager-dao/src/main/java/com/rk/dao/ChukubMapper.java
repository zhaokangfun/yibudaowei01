package com.rk.dao;

import com.rk.entity.Chukub;

public interface ChukubMapper {
    int deleteByPrimaryKey(Integer ckid);

    int insert(Chukub record);

    int insertSelective(Chukub record);

    Chukub selectByPrimaryKey(Integer ckid);

    int updateByPrimaryKeySelective(Chukub record);

    int updateByPrimaryKey(Chukub record);
}