package com.rk.service;

import com.rk.entity.Pandianb;

public interface PandianbService {
    int deleteByPrimaryKey(Integer pdid);

    int insert(Pandianb record);

    int insertSelective(Pandianb record);

    Pandianb selectByPrimaryKey(Integer pdid);

    int updateByPrimaryKeySelective(Pandianb record);

    int updateByPrimaryKey(Pandianb record);
}