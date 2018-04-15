package com.rk.service;

import com.rk.entity.Lianxirentypeb;

public interface LianxirentypebService {
    int deleteByPrimaryKey(Integer lxrtypeid);

    int insert(Lianxirentypeb record);

    int insertSelective(Lianxirentypeb record);

    Lianxirentypeb selectByPrimaryKey(Integer lxrtypeid);

    int updateByPrimaryKeySelective(Lianxirentypeb record);

    int updateByPrimaryKey(Lianxirentypeb record);
}