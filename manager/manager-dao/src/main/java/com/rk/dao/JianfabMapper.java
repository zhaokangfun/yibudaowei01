package com.rk.dao;

import com.rk.entity.Jianfab;

public interface JianfabMapper {
    int deleteByPrimaryKey(Integer jianfaid);

    int insert(Jianfab record);

    int insertSelective(Jianfab record);

    Jianfab selectByPrimaryKey(Integer jianfaid);

    int updateByPrimaryKeySelective(Jianfab record);

    int updateByPrimaryKey(Jianfab record);
}