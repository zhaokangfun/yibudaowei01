package com.rk.dao;

import com.rk.entity.Yongfab;

public interface YongfabMapper {
    int deleteByPrimaryKey(Integer yfid);

    int insert(Yongfab record);

    int insertSelective(Yongfab record);

    Yongfab selectByPrimaryKey(Integer yfid);

    int updateByPrimaryKeySelective(Yongfab record);

    int updateByPrimaryKey(Yongfab record);
}