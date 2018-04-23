package com.rk.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.rk.entity.Jichuhechengb;

public interface JichuhechengbMapper {
    int deleteByPrimaryKey(Integer jchcid);

    int insert(Jichuhechengb record);

    int insertSelective(Jichuhechengb record);

    Jichuhechengb selectByPrimaryKey(Integer jchcid);

    int updateBy(@Param("zhi")int zhi,@Param("id")int id);

    int updateByPrimaryKey(Jichuhechengb record);
    List<Jichuhechengb> SelectAll();
}