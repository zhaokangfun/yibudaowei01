package com.rk.service;

import com.rk.entity.Huanzhexinxib;

public interface HuanzhexinxibService {
    int deleteByPrimaryKey(Integer hzxxid);

    int insert(Huanzhexinxib record);

    int insertSelective(Huanzhexinxib record);

    Huanzhexinxib selectByPrimaryKey(Integer hzxxid);

    int updateByPrimaryKeySelective(Huanzhexinxib record);

    int updateByPrimaryKey(Huanzhexinxib record);
   
}