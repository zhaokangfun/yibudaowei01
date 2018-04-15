package com.rk.dao;

import com.rk.entity.Pandianb;

public interface PandianbMapper {
    int deleteByPrimaryKey(Integer pdid);

    int insert(Pandianb record);

    int insertSelective(Pandianb record);

    Pandianb selectByPrimaryKey(Integer pdid);

    int updateByPrimaryKeySelective(Pandianb record);

    int updateByPrimaryKey(Pandianb record);
}