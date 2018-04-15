package com.rk.dao;

import com.rk.entity.Kucunb;

public interface KucunbMapper {
    int deleteByPrimaryKey(Integer kcid);

    int insert(Kucunb record);

    int insertSelective(Kucunb record);

    Kucunb selectByPrimaryKey(Integer kcid);

    int updateByPrimaryKeySelective(Kucunb record);

    int updateByPrimaryKey(Kucunb record);
}