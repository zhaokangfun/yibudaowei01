package com.rk.service;

import java.util.List;

import com.rk.entity.Jichuhechengb;

public interface JichuhechengbService {
    int deleteByPrimaryKey(Integer jchcid);

    int insert(Jichuhechengb record);

    int insertSelective(Jichuhechengb record);

    Jichuhechengb selectByPrimaryKey(Integer jchcid);

    int updateBy(int zhi, int id);

    int updateByPrimaryKey(Jichuhechengb record);
    
    List<Jichuhechengb> SelectAll();
}