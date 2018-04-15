package com.rk.dao;

import com.rk.entity.Chuzhenb;

public interface ChuzhenbMapper {
    int deleteByPrimaryKey(Integer czid);

    int insert(Chuzhenb record);

    int insertSelective(Chuzhenb record);

    Chuzhenb selectByPrimaryKey(Integer czid);

    int updateByPrimaryKeySelective(Chuzhenb record);

    int updateByPrimaryKey(Chuzhenb record);
}