package com.rk.service;

import com.rk.entity.Yaopintypeb;

public interface YaopintypebService {
    int deleteByPrimaryKey(Integer yptypeid);

    int insert(Yaopintypeb record);

    int insertSelective(Yaopintypeb record);

    Yaopintypeb selectByPrimaryKey(Integer yptypeid);

    int updateByPrimaryKeySelective(Yaopintypeb record);

    int updateByPrimaryKey(Yaopintypeb record);
}