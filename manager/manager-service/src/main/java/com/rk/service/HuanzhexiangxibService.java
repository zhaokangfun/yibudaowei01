package com.rk.service;

import com.rk.entity.Huanzhexiangxib;

public interface HuanzhexiangxibService {
    int deleteByPrimaryKey(Integer hzid);

    int insert(Huanzhexiangxib record);

    int insertSelective(Huanzhexiangxib record);

    Huanzhexiangxib selectByPrimaryKey(Integer hzid);

    int updateByPrimaryKeySelective(Huanzhexiangxib record);

    int updateByPrimaryKey(Huanzhexiangxib record);
}