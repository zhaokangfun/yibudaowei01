package com.rk.service;

import com.rk.entity.Xinzengxiangmu;

public interface XinzengxiangmuService {
    int deleteByPrimaryKey(Integer xinzengid);

    int insert(Xinzengxiangmu record);

    int insertSelective(Xinzengxiangmu record);

    Xinzengxiangmu selectByPrimaryKey(Integer xinzengid);

    int updateByPrimaryKeySelective(Xinzengxiangmu record);

    int updateByPrimaryKey(Xinzengxiangmu record);
}