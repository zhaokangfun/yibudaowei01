package com.rk.service;

import com.rk.entity.Yuyuehcb;

public interface YuyuehcbService {
    int deleteByPrimaryKey(Integer yyhcid);

    int insert(Yuyuehcb record);

    int insertSelective(Yuyuehcb record);

    Yuyuehcb selectByPrimaryKey(Integer yyhcid);

    int updateByPrimaryKeySelective(Yuyuehcb record);

    int updateByPrimaryKey(Yuyuehcb record);
}