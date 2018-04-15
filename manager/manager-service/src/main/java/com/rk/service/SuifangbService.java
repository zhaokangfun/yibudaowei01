package com.rk.service;

import com.rk.entity.Suifangb;

public interface SuifangbService {
    int deleteByPrimaryKey(Integer suifangid);

    int insert(Suifangb record);

    int insertSelective(Suifangb record);

    Suifangb selectByPrimaryKey(Integer suifangid);

    int updateByPrimaryKeySelective(Suifangb record);

    int updateByPrimaryKey(Suifangb record);
}