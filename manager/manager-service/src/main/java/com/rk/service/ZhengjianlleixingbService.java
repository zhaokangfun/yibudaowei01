package com.rk.service;

import com.rk.entity.Zhengjianlleixingb;

public interface ZhengjianlleixingbService {
    int deleteByPrimaryKey(Integer zjtypeid);

    int insert(Zhengjianlleixingb record);

    int insertSelective(Zhengjianlleixingb record);

    Zhengjianlleixingb selectByPrimaryKey(Integer zjtypeid);

    int updateByPrimaryKeySelective(Zhengjianlleixingb record);

    int updateByPrimaryKey(Zhengjianlleixingb record);
}