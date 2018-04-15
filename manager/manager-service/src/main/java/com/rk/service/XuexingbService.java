package com.rk.service;

import com.rk.entity.Xuexingb;

public interface XuexingbService {
    int deleteByPrimaryKey(Integer xuexingid);

    int insert(Xuexingb record);

    int insertSelective(Xuexingb record);

    Xuexingb selectByPrimaryKey(Integer xuexingid);

    int updateByPrimaryKeySelective(Xuexingb record);

    int updateByPrimaryKey(Xuexingb record);
}