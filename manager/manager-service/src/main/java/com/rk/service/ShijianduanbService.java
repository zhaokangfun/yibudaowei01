package com.rk.service;

import java.util.List;

import com.rk.entity.Shijianduanb;

public interface ShijianduanbService {
    int deleteByPrimaryKey(Integer shijianduanid);

    int insert(Shijianduanb record);

    int insertSelective(Shijianduanb record);

    Shijianduanb selectByPrimaryKey(Integer shijianduanid);

    int updateByPrimaryKeySelective(Shijianduanb record);

    int updateByPrimaryKey(Shijianduanb record);
    
    List<Shijianduanb> AllList();
}