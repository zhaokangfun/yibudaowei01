package com.rk.dao;

import com.rk.entity.Ygxxb;

public interface YgxxbMapper {
    int deleteByPrimaryKey(Integer ygid);

    int insert(Ygxxb record);

    int insertSelective(Ygxxb record);

    Ygxxb selectByPrimaryKey(Integer ygid);

    int updateByPrimaryKeySelective(Ygxxb record);

    int updateByPrimaryKey(Ygxxb record);
}