package com.rk.service;

import java.util.List;

import com.rk.entity.Yuyueguizeb;

public interface YuyueguizebService {
    int deleteByPrimaryKey(Integer yygzid);

    int insert(Yuyueguizeb record);

    int insertSelective(Yuyueguizeb record);

    Yuyueguizeb selectByPrimaryKey(Integer yygzid);

    int updateBy(String zhi,int id);

    int updateByPrimaryKey(Yuyueguizeb record);
    
    List<Yuyueguizeb> SelectAll();
}