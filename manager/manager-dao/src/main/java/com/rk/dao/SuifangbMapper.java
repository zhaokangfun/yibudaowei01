package com.rk.dao;

import com.rk.entity.Suifangb;

public interface SuifangbMapper {
    int deleteByPrimaryKey(Integer suifangid);

    int insert(Suifangb record);

    int insertSelective(Suifangb record);

    Suifangb selectByPrimaryKey(Integer suifangid);

    int updateByPrimaryKeySelective(Suifangb record);

    int updateByPrimaryKey(Suifangb record);
}