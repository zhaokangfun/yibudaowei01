package com.rk.dao;

import java.util.List;

import com.rk.entity.Lianxirentypeb;

public interface LianxirentypebMapper {
    int deleteByPrimaryKey(Integer lxrtypeid);

    int insert(Lianxirentypeb record);

    int insertSelective(Lianxirentypeb record);

    Lianxirentypeb selectByPrimaryKey(Integer lxrtypeid);

    int updateByPrimaryKeySelective(Lianxirentypeb record);

    int updateByPrimaryKey(Lianxirentypeb record);
    
    List<Lianxirentypeb> lxrlist();
}