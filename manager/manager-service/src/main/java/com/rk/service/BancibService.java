package com.rk.service;

import java.util.List;

import com.rk.entity.Bancib;

public interface BancibService {
    int deleteByPrimaryKey(Integer banciid);

    int insert(Bancib record);

    int insertSelective(Bancib record);

    Bancib selectByPrimaryKey(Integer banciid);

    int updateByPrimaryKeySelective(Bancib record);

    int updateByPrimaryKey(Bancib record);
    
    List<Bancib> getAll();
}