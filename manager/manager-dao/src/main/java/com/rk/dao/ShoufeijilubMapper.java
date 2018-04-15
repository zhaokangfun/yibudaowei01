package com.rk.dao;

import com.rk.entity.Shoufeijilub;

public interface ShoufeijilubMapper {
    int deleteByPrimaryKey(Integer shoufeiid);

    int insert(Shoufeijilub record);

    int insertSelective(Shoufeijilub record);

    Shoufeijilub selectByPrimaryKey(Integer shoufeiid);

    int updateByPrimaryKeySelective(Shoufeijilub record);

    int updateByPrimaryKey(Shoufeijilub record);
}