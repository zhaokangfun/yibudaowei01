package com.rk.dao;

import com.rk.entity.Denglub;

public interface DenglubMapper {
    int deleteByPrimaryKey(Integer adminid);

    int insert(Denglub record);

    int insertSelective(Denglub record);

    Denglub selectByPrimaryKey(Integer adminid);

    int updateByPrimaryKeySelective(Denglub record);

    int updateByPrimaryKey(Denglub record);
}