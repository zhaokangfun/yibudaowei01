package com.rk.service;

import com.rk.entity.Laiyuanb;

public interface LaiyuanbService {
    int deleteByPrimaryKey(Integer lyid);

    int insert(Laiyuanb record);

    int insertSelective(Laiyuanb record);

    Laiyuanb selectByPrimaryKey(Integer lyid);

    int updateByPrimaryKeySelective(Laiyuanb record);

    int updateByPrimaryKey(Laiyuanb record);
}