package com.rk.dao;

import java.util.List;

import com.rk.entity.Keshib;

public interface KeshibMapper {
    int deleteByPrimaryKey(Integer keshiid);

    int insert(Keshib record);

    int insertSelective(Keshib record);

    Keshib selectByPrimaryKey(Integer keshiid);

    int updateByPrimaryKeySelective(Keshib record);

    int updateByPrimaryKey(Keshib record);
    
    //查询所有
    List<Keshib> getAll();
}