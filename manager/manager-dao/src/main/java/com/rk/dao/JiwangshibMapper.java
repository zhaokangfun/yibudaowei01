package com.rk.dao;

import com.rk.entity.Jiwangshib;

public interface JiwangshibMapper {
    int deleteByPrimaryKey(Integer jwsid);

    int insert(Jiwangshib record);

    int insertSelective(Jiwangshib record);

    Jiwangshib selectByPrimaryKey(Integer jwsid);

    int updateByPrimaryKeySelective(Jiwangshib record);

    int updateByPrimaryKey(Jiwangshib record);
}