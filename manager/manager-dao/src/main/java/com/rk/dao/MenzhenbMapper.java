package com.rk.dao;

import com.rk.entity.Menzhenb;

public interface MenzhenbMapper {
    int deleteByPrimaryKey(Integer mzid);

    int insert(Menzhenb record);

    int insertSelective(Menzhenb record);

    Menzhenb selectByPrimaryKey(Integer mzid);

    int updateByPrimaryKeySelective(Menzhenb record);

    int updateByPrimaryKey(Menzhenb record);
}