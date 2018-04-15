package com.rk.service;

import com.rk.entity.Chuzhenb;

public interface ChuzhenbService {
    int deleteByPrimaryKey(Integer czid);

    int insert(Chuzhenb record);

    int insertSelective(Chuzhenb record);

    Chuzhenb selectByPrimaryKey(Integer czid);

    int updateByPrimaryKeySelective(Chuzhenb record);

    int updateByPrimaryKey(Chuzhenb record);
}