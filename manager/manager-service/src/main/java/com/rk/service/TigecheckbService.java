package com.rk.service;

import com.rk.entity.Tigecheckb;

public interface TigecheckbService {
    int deleteByPrimaryKey(Integer tigechekid);

    int insert(Tigecheckb record);

    int insertSelective(Tigecheckb record);

    Tigecheckb selectByPrimaryKey(Integer tigechekid);

    int updateByPrimaryKeySelective(Tigecheckb record);

    int updateByPrimaryKey(Tigecheckb record);
}