package com.rk.dao;

import com.rk.entity.Jianyanb;

public interface JianyanbMapper {
    int deleteByPrimaryKey(Integer jyid);

    int insert(Jianyanb record);

    int insertSelective(Jianyanb record);

    Jianyanb selectByPrimaryKey(Integer jyid);

    int updateByPrimaryKeySelective(Jianyanb record);

    int updateByPrimaryKey(Jianyanb record);
}