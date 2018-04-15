package com.rk.dao;

import com.rk.entity.Jxcxiangxijilub;

public interface JxcxiangxijilubMapper {
    int deleteByPrimaryKey(Integer jxcid);

    int insert(Jxcxiangxijilub record);

    int insertSelective(Jxcxiangxijilub record);

    Jxcxiangxijilub selectByPrimaryKey(Integer jxcid);

    int updateByPrimaryKeySelective(Jxcxiangxijilub record);

    int updateByPrimaryKey(Jxcxiangxijilub record);
}