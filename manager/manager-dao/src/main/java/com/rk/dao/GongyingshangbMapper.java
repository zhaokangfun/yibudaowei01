package com.rk.dao;

import com.rk.entity.Gongyingshangb;

public interface GongyingshangbMapper {
    int deleteByPrimaryKey(Integer gysid);

    int insert(Gongyingshangb record);

    int insertSelective(Gongyingshangb record);

    Gongyingshangb selectByPrimaryKey(Integer gysid);

    int updateByPrimaryKeySelective(Gongyingshangb record);

    int updateByPrimaryKey(Gongyingshangb record);
}