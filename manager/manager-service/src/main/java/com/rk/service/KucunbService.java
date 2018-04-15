package com.rk.service;

import com.rk.entity.Kucunb;

public interface KucunbService {
    int deleteByPrimaryKey(Integer kcid);

    int insert(Kucunb record);

    int insertSelective(Kucunb record);

    Kucunb selectByPrimaryKey(Integer kcid);

    int updateByPrimaryKeySelective(Kucunb record);

    int updateByPrimaryKey(Kucunb record);
}