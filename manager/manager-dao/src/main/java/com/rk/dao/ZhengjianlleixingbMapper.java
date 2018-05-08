package com.rk.dao;

import java.util.List;

import com.rk.entity.Zhengjianlleixingb;

public interface ZhengjianlleixingbMapper {
    int deleteByPrimaryKey(Integer zjtypeid);

    int insert(Zhengjianlleixingb record);

    int insertSelective(Zhengjianlleixingb record);

    Zhengjianlleixingb selectByPrimaryKey(Integer zjtypeid);

    int updateByPrimaryKeySelective(Zhengjianlleixingb record);

    int updateByPrimaryKey(Zhengjianlleixingb record);
    
    List<Zhengjianlleixingb> list();
}