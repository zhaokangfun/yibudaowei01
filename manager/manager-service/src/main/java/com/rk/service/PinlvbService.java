package com.rk.service;

import com.rk.entity.Pinlvb;

public interface PinlvbService {
    int deleteByPrimaryKey(Integer plid);

    int insert(Pinlvb record);

    int insertSelective(Pinlvb record);

    Pinlvb selectByPrimaryKey(Integer plid);

    int updateByPrimaryKeySelective(Pinlvb record);

    int updateByPrimaryKey(Pinlvb record);
}