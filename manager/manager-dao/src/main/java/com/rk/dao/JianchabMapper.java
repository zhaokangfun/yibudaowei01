package com.rk.dao;

import com.rk.entity.Jianchab;

public interface JianchabMapper {
    int deleteByPrimaryKey(Integer jcid);

    int insert(Jianchab record);

    int insertSelective(Jianchab record);

    Jianchab selectByPrimaryKey(Integer jcid);

    int updateByPrimaryKeySelective(Jianchab record);

    int updateByPrimaryKey(Jianchab record);
}