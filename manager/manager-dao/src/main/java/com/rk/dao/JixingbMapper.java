package com.rk.dao;

import java.util.List;

import com.rk.entity.Jixingb;

public interface JixingbMapper {
    int deleteByPrimaryKey(Integer jxid);

    int insert(Jixingb record);

    int insertSelective(Jixingb record);

    Jixingb selectByPrimaryKey(Integer jxid);

    int updateByPrimaryKeySelective(Jixingb record);

    int updateByPrimaryKey(Jixingb record);
    
    List<Jixingb> Gelljx();
}