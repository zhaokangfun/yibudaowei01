package com.rk.service;

import java.util.List;

import com.rk.entity.Laiyuanb;

public interface LaiyuanbService {
    int deleteByPrimaryKey(Integer lyid);

    int insert(Laiyuanb record);

    int insertSelective(Laiyuanb record);

    Laiyuanb selectByPrimaryKey(Integer lyid);

    int updateByPrimaryKeySelective(Laiyuanb record);

    int updateByPrimaryKey(Laiyuanb record);
    
    List<Laiyuanb> listall();
}