package com.rk.service;

import com.rk.entity.Vipb;

public interface VipbService {
    int deleteByPrimaryKey(Integer vipid);

    int insert(Vipb record);

    int insertSelective(Vipb record);

    Vipb selectByPrimaryKey(Integer vipid);

    int updateByPrimaryKeySelective(Vipb record);

    int updateByPrimaryKey(Vipb record);
}