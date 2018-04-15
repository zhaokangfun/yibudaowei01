package com.rk.dao;

import com.rk.entity.Zhiweib;

public interface ZhiweibMapper {
    int deleteByPrimaryKey(Integer zhiweiid);

    int insert(Zhiweib record);

    int insertSelective(Zhiweib record);

    Zhiweib selectByPrimaryKey(Integer zhiweiid);

    int updateByPrimaryKeySelective(Zhiweib record);

    int updateByPrimaryKey(Zhiweib record);
}