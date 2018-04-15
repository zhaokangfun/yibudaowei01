package com.rk.dao;

import com.rk.entity.Rukufangshib;

public interface RukufangshibMapper {
    int deleteByPrimaryKey(Integer rkfangshi);

    int insert(Rukufangshib record);

    int insertSelective(Rukufangshib record);

    Rukufangshib selectByPrimaryKey(Integer rkfangshi);

    int updateByPrimaryKeySelective(Rukufangshib record);

    int updateByPrimaryKey(Rukufangshib record);
}