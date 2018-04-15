package com.rk.service;

import com.rk.entity.Jiwangshib;

public interface JiwangshibService {
    int deleteByPrimaryKey(Integer jwsid);

    int insert(Jiwangshib record);

    int insertSelective(Jiwangshib record);

    Jiwangshib selectByPrimaryKey(Integer jwsid);

    int updateByPrimaryKeySelective(Jiwangshib record);

    int updateByPrimaryKey(Jiwangshib record);
}