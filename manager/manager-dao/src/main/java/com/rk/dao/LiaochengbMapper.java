package com.rk.dao;

import com.rk.entity.Liaochengb;

public interface LiaochengbMapper {
    int deleteByPrimaryKey(Integer lcid);

    int insert(Liaochengb record);

    int insertSelective(Liaochengb record);

    Liaochengb selectByPrimaryKey(Integer lcid);

    int updateByPrimaryKeySelective(Liaochengb record);

    int updateByPrimaryKey(Liaochengb record);
}