package com.rk.service;

import com.rk.entity.Ygxxb;

public interface YgxxbService {
    int deleteByPrimaryKey(Integer ygid);

    int insert(Ygxxb record);

    int insertSelective(Ygxxb record);

    Ygxxb selectByPrimaryKey(Integer ygid);

    int updateByPrimaryKeySelective(Ygxxb record);

    int updateByPrimaryKey(Ygxxb record);
}