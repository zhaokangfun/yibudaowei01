package com.rk.service;

import com.rk.entity.Jianyanb;

public interface JianyanbService {
    int deleteByPrimaryKey(Integer jyid);

    int insert(Jianyanb record);

    int insertSelective(Jianyanb record);

    Jianyanb selectByPrimaryKey(Integer jyid);

    int updateByPrimaryKeySelective(Jianyanb record);

    int updateByPrimaryKey(Jianyanb record);
}