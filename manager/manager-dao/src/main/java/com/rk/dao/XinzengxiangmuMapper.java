package com.rk.dao;

import com.rk.entity.Xinzengxiangmu;

public interface XinzengxiangmuMapper {
    int deleteByPrimaryKey(Integer xinzengid);

    int insert(Xinzengxiangmu record);

    int insertSelective(Xinzengxiangmu record);

    Xinzengxiangmu selectByPrimaryKey(Integer xinzengid);

    int updateByPrimaryKeySelective(Xinzengxiangmu record);

    int updateByPrimaryKey(Xinzengxiangmu record);
}