package com.rk.dao;

import com.rk.entity.Paibantimeb;

public interface PaibantimebMapper {
    int deleteByPrimaryKey(Integer pbid);

    int insert(Paibantimeb record);

    int insertSelective(Paibantimeb record);

    Paibantimeb selectByPrimaryKey(Integer pbid);

    int updateByPrimaryKeySelective(Paibantimeb record);

    int updateByPrimaryKey(Paibantimeb record);
}