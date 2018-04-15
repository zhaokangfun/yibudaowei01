package com.rk.dao;

import com.rk.entity.Cailiaob;

public interface CailiaobMapper {
    int deleteByPrimaryKey(Integer clid);

    int insert(Cailiaob record);

    int insertSelective(Cailiaob record);

    Cailiaob selectByPrimaryKey(Integer clid);

    int updateByPrimaryKeySelective(Cailiaob record);

    int updateByPrimaryKey(Cailiaob record);
}