package com.rk.dao;

import com.rk.entity.Vipb;

public interface VipbMapper {
    int deleteByPrimaryKey(Integer vipid);

    int insert(Vipb record);

    int insertSelective(Vipb record);

    Vipb selectByPrimaryKey(Integer vipid);

    int updateByPrimaryKeySelective(Vipb record);

    int updateByPrimaryKey(Vipb record);
}