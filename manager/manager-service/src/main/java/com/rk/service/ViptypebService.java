package com.rk.service;

import com.rk.entity.Viptypeb;

public interface ViptypebService {
    int deleteByPrimaryKey(Integer viptypeid);

    int insert(Viptypeb record);

    int insertSelective(Viptypeb record);

    Viptypeb selectByPrimaryKey(Integer viptypeid);

    int updateByPrimaryKeySelective(Viptypeb record);

    int updateByPrimaryKey(Viptypeb record);
}