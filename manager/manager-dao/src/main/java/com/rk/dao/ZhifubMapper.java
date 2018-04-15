package com.rk.dao;

import com.rk.entity.Zhifub;

public interface ZhifubMapper {
    int deleteByPrimaryKey(Integer zfid);

    int insert(Zhifub record);

    int insertSelective(Zhifub record);

    Zhifub selectByPrimaryKey(Integer zfid);

    int updateByPrimaryKeySelective(Zhifub record);

    int updateByPrimaryKey(Zhifub record);
}