package com.rk.dao;

import com.rk.entity.Jichuhechengb;

public interface JichuhechengbMapper {
    int deleteByPrimaryKey(Integer jchcid);

    int insert(Jichuhechengb record);

    int insertSelective(Jichuhechengb record);

    Jichuhechengb selectByPrimaryKey(Integer jchcid);

    int updateByPrimaryKeySelective(Jichuhechengb record);

    int updateByPrimaryKey(Jichuhechengb record);
}