package com.rk.dao;

import com.rk.entity.Xuexingb;

public interface XuexingbMapper {
    int deleteByPrimaryKey(Integer xuexingid);

    int insert(Xuexingb record);

    int insertSelective(Xuexingb record);

    Xuexingb selectByPrimaryKey(Integer xuexingid);

    int updateByPrimaryKeySelective(Xuexingb record);

    int updateByPrimaryKey(Xuexingb record);
}