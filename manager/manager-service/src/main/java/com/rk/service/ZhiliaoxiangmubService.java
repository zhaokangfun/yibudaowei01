package com.rk.service;

import com.rk.entity.Zhiliaoxiangmub;

public interface ZhiliaoxiangmubService {
    int deleteByPrimaryKey(Integer zlxmid);

    int insert(Zhiliaoxiangmub record);

    int insertSelective(Zhiliaoxiangmub record);

    Zhiliaoxiangmub selectByPrimaryKey(Integer zlxmid);

    int updateByPrimaryKeySelective(Zhiliaoxiangmub record);

    int updateByPrimaryKey(Zhiliaoxiangmub record);
}