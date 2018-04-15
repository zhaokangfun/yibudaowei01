package com.rk.dao;

import com.rk.entity.Zhongyaob;

public interface ZhongyaobMapper {
    int deleteByPrimaryKey(Integer zyid);

    int insert(Zhongyaob record);

    int insertSelective(Zhongyaob record);

    Zhongyaob selectByPrimaryKey(Integer zyid);

    int updateByPrimaryKeySelective(Zhongyaob record);

    int updateByPrimaryKey(Zhongyaob record);
}