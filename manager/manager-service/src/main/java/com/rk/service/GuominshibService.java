package com.rk.service;

import java.util.List;

import com.rk.entity.Guominshib;

public interface GuominshibService {
    int deleteByPrimaryKey(Integer gmsid);

    int insert(Guominshib record);

    int insertSelective(Guominshib record);

    Guominshib selectByPrimaryKey(Integer gmsid);

    int updateByPrimaryKeySelective(Guominshib record);

    int updateByPrimaryKey(Guominshib record);
    
    List<Guominshib> listAll();
}