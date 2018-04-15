package com.rk.service;

import com.rk.entity.Liaochengb;

public interface LiaochengbService {
    int deleteByPrimaryKey(Integer lcid);

    int insert(Liaochengb record);

    int insertSelective(Liaochengb record);

    Liaochengb selectByPrimaryKey(Integer lcid);

    int updateByPrimaryKeySelective(Liaochengb record);

    int updateByPrimaryKey(Liaochengb record);
}