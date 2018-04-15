package com.rk.service;

import com.rk.entity.Zhifub;

public interface ZhifubService {
    int deleteByPrimaryKey(Integer zfid);

    int insert(Zhifub record);

    int insertSelective(Zhifub record);

    Zhifub selectByPrimaryKey(Integer zfid);

    int updateByPrimaryKeySelective(Zhifub record);

    int updateByPrimaryKey(Zhifub record);
}