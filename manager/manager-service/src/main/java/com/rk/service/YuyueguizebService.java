package com.rk.service;

import com.rk.entity.Yuyueguizeb;

public interface YuyueguizebService {
    int deleteByPrimaryKey(Integer yygzid);

    int insert(Yuyueguizeb record);

    int insertSelective(Yuyueguizeb record);

    Yuyueguizeb selectByPrimaryKey(Integer yygzid);

    int updateByPrimaryKeySelective(Yuyueguizeb record);

    int updateByPrimaryKey(Yuyueguizeb record);
}