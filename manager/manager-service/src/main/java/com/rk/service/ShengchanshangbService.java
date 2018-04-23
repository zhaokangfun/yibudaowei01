package com.rk.service;

import java.util.List;

import com.rk.entity.Shengchanshangb;

public interface ShengchanshangbService {
    int deleteByPrimaryKey(Integer scsid);

    int insert(Shengchanshangb record);

    int insertSelective(Shengchanshangb record);

    Shengchanshangb selectByPrimaryKey(Integer scsid);

    int updateByPrimaryKeySelective(Shengchanshangb record);

    int updateByPrimaryKey(Shengchanshangb record);
    
    List<Shengchanshangb> sccsGell();
}