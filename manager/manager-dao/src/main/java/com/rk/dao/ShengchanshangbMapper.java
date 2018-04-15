package com.rk.dao;

import com.rk.entity.Shengchanshangb;

public interface ShengchanshangbMapper {
    int deleteByPrimaryKey(Integer scsid);

    int insert(Shengchanshangb record);

    int insertSelective(Shengchanshangb record);

    Shengchanshangb selectByPrimaryKey(Integer scsid);

    int updateByPrimaryKeySelective(Shengchanshangb record);

    int updateByPrimaryKey(Shengchanshangb record);
}