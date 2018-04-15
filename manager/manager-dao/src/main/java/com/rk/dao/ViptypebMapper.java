package com.rk.dao;

import com.rk.entity.Viptypeb;

public interface ViptypebMapper {
    int deleteByPrimaryKey(Integer viptypeid);

    int insert(Viptypeb record);

    int insertSelective(Viptypeb record);

    Viptypeb selectByPrimaryKey(Integer viptypeid);

    int updateByPrimaryKeySelective(Viptypeb record);

    int updateByPrimaryKey(Viptypeb record);
}