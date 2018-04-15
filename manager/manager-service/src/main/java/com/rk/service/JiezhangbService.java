package com.rk.service;

import com.rk.entity.Jiezhangb;

public interface JiezhangbService {
    int deleteByPrimaryKey(Integer jiezhangid);

    int insert(Jiezhangb record);

    int insertSelective(Jiezhangb record);

    Jiezhangb selectByPrimaryKey(Integer jiezhangid);

    int updateByPrimaryKeySelective(Jiezhangb record);

    int updateByPrimaryKey(Jiezhangb record);
}