package com.rk.dao;

import com.rk.entity.Yaopintypeb;

public interface YaopintypebMapper {
    int deleteByPrimaryKey(Integer yptypeid);

    int insert(Yaopintypeb record);

    int insertSelective(Yaopintypeb record);

    Yaopintypeb selectByPrimaryKey(Integer yptypeid);

    int updateByPrimaryKeySelective(Yaopintypeb record);

    int updateByPrimaryKey(Yaopintypeb record);
}