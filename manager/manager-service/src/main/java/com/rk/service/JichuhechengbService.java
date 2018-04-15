package com.rk.service;

import com.rk.entity.Jichuhechengb;

public interface JichuhechengbService {
    int deleteByPrimaryKey(Integer jchcid);

    int insert(Jichuhechengb record);

    int insertSelective(Jichuhechengb record);

    Jichuhechengb selectByPrimaryKey(Integer jchcid);

    int updateByPrimaryKeySelective(Jichuhechengb record);

    int updateByPrimaryKey(Jichuhechengb record);
}