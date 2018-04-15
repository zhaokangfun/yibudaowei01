package com.rk.dao;

import com.rk.entity.Pinlvb;

public interface PinlvbMapper {
    int deleteByPrimaryKey(Integer plid);

    int insert(Pinlvb record);

    int insertSelective(Pinlvb record);

    Pinlvb selectByPrimaryKey(Integer plid);

    int updateByPrimaryKeySelective(Pinlvb record);

    int updateByPrimaryKey(Pinlvb record);
}