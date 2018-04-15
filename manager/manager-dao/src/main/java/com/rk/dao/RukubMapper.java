package com.rk.dao;

import com.rk.entity.Rukub;

public interface RukubMapper {
    int deleteByPrimaryKey(Integer rkid);

    int insert(Rukub record);

    int insertSelective(Rukub record);

    Rukub selectByPrimaryKey(Integer rkid);

    int updateByPrimaryKeySelective(Rukub record);

    int updateByPrimaryKey(Rukub record);
}