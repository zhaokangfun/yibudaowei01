package com.rk.service;

import java.util.List;

import com.rk.entity.Gongyingshangb;

public interface GongyingshangbService {
    int deleteByPrimaryKey(Integer gysid);

    int insert(Gongyingshangb record);

    int insertSelective(Gongyingshangb record);

    Gongyingshangb selectByPrimaryKey(Integer gysid);

    int updateByPrimaryKeySelective(Gongyingshangb record);

    int updateByPrimaryKey(Gongyingshangb record);
    
    List<Gongyingshangb> gysGell();
}