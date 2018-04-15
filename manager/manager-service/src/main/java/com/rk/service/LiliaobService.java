package com.rk.service;

import com.rk.entity.Liliaob;

public interface LiliaobService {
    int deleteByPrimaryKey(Integer llid);

    int insert(Liliaob record);

    int insertSelective(Liliaob record);

    Liliaob selectByPrimaryKey(Integer llid);

    int updateByPrimaryKeySelective(Liliaob record);

    int updateByPrimaryKey(Liliaob record);
}