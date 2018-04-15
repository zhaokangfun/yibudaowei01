package com.rk.service;

import com.rk.entity.Huanzheyuyueb;

public interface HuanzheyuyuebService {
    int deleteByPrimaryKey(Integer hzyyid);

    int insert(Huanzheyuyueb record);

    int insertSelective(Huanzheyuyueb record);

    Huanzheyuyueb selectByPrimaryKey(Integer hzyyid);

    int updateByPrimaryKeySelective(Huanzheyuyueb record);

    int updateByPrimaryKey(Huanzheyuyueb record);
}