package com.rk.service;

import java.util.List;

import com.rk.entity.Yongfab;

public interface YongfabService {
    int deleteByPrimaryKey(Integer yfid);

    int insert(Yongfab record);

    int insertSelective(Yongfab record);

    Yongfab selectByPrimaryKey(Integer yfid);

    int updateByPrimaryKeySelective(Yongfab record);

    int updateByPrimaryKey(Yongfab record);
    
    List<Yongfab> Gellyf();
}