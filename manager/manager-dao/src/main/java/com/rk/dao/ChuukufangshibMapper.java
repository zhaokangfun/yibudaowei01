package com.rk.dao;

import com.rk.entity.Chuukufangshib;

public interface ChuukufangshibMapper {
    int deleteByPrimaryKey(Integer ckfsid);

    int insert(Chuukufangshib record);

    int insertSelective(Chuukufangshib record);

    Chuukufangshib selectByPrimaryKey(Integer ckfsid);

    int updateByPrimaryKeySelective(Chuukufangshib record);

    int updateByPrimaryKey(Chuukufangshib record);
}