package com.rk.service;

import com.rk.entity.Jixingb;

public interface JixingbService {
    int deleteByPrimaryKey(Integer jxid);

    int insert(Jixingb record);

    int insertSelective(Jixingb record);

    Jixingb selectByPrimaryKey(Integer jxid);

    int updateByPrimaryKeySelective(Jixingb record);

    int updateByPrimaryKey(Jixingb record);
}