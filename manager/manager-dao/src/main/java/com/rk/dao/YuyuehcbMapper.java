package com.rk.dao;

import com.rk.entity.Yuyuehcb;

public interface YuyuehcbMapper {
    int deleteByPrimaryKey(Integer yyhcid);

    int insert(Yuyuehcb record);

    int insertSelective(Yuyuehcb record);

    Yuyuehcb selectByPrimaryKey(Integer yyhcid);

    int updateByPrimaryKeySelective(Yuyuehcb record);

    int updateByPrimaryKey(Yuyuehcb record);
}