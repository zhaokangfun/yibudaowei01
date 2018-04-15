package com.rk.service;

import com.rk.entity.Resource;

public interface ResourceService {
    int deleteByPrimaryKey(Integer resourceid);

    int insert(Resource record);

    int insertSelective(Resource record);

    Resource selectByPrimaryKey(Integer resourceid);

    int updateByPrimaryKeySelective(Resource record);

    int updateByPrimaryKey(Resource record);
}