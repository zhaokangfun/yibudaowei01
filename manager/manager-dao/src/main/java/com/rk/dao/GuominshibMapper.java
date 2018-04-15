package com.rk.dao;

import com.rk.entity.Guominshib;

public interface GuominshibMapper {
    int deleteByPrimaryKey(Integer gmsid);

    int insert(Guominshib record);

    int insertSelective(Guominshib record);

    Guominshib selectByPrimaryKey(Integer gmsid);

    int updateByPrimaryKeySelective(Guominshib record);

    int updateByPrimaryKey(Guominshib record);
}