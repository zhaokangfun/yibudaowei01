package com.rk.service;

import com.rk.entity.Rukufangshib;

public interface RukufangshibService {
    int deleteByPrimaryKey(Integer rkfangshi);

    int insert(Rukufangshib record);

    int insertSelective(Rukufangshib record);

    Rukufangshib selectByPrimaryKey(Integer rkfangshi);

    int updateByPrimaryKeySelective(Rukufangshib record);

    int updateByPrimaryKey(Rukufangshib record);
}