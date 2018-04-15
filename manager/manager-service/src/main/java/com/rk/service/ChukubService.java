package com.rk.service;

import com.rk.entity.Chukub;

public interface ChukubService {
    int deleteByPrimaryKey(Integer ckid);

    int insert(Chukub record);

    int insertSelective(Chukub record);

    Chukub selectByPrimaryKey(Integer ckid);

    int updateByPrimaryKeySelective(Chukub record);

    int updateByPrimaryKey(Chukub record);
}