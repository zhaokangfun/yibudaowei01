package com.rk.dao;

import com.rk.entity.Huanzheyuyueb;

public interface HuanzheyuyuebMapper {
    int deleteByPrimaryKey(Integer hzyyid);

    int insert(Huanzheyuyueb record);

    int insertSelective(Huanzheyuyueb record);

    Huanzheyuyueb selectByPrimaryKey(Integer hzyyid);

    int updateByPrimaryKeySelective(Huanzheyuyueb record);

    int updateByPrimaryKey(Huanzheyuyueb record);
}