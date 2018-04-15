package com.rk.service;

import com.rk.entity.Jxcxiangxijilub;

public interface JxcxiangxijilubService {
    int deleteByPrimaryKey(Integer jxcid);

    int insert(Jxcxiangxijilub record);

    int insertSelective(Jxcxiangxijilub record);

    Jxcxiangxijilub selectByPrimaryKey(Integer jxcid);

    int updateByPrimaryKeySelective(Jxcxiangxijilub record);

    int updateByPrimaryKey(Jxcxiangxijilub record);
}