package com.rk.dao;

import com.rk.entity.Yuyueguizeb;

public interface YuyueguizebMapper {
    int deleteByPrimaryKey(Integer yygzid);

    int insert(Yuyueguizeb record);

    int insertSelective(Yuyueguizeb record);

    Yuyueguizeb selectByPrimaryKey(Integer yygzid);

    int updateByPrimaryKeySelective(Yuyueguizeb record);

    int updateByPrimaryKey(Yuyueguizeb record);
}