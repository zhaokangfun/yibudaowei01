package com.rk.dao;

import java.util.List;

import com.rk.entity.Tigecheckb;

public interface TigecheckbMapper {
    int deleteByPrimaryKey(Integer tigechekid);

    int insert(Tigecheckb record);

    int insertSelective(Tigecheckb record);

    Tigecheckb selectByPrimaryKey(Integer tigechekid);

    int updateByPrimaryKeySelective(Tigecheckb record);

    int updateByPrimaryKey(Tigecheckb record);
    
    List<Tigecheckb> listAll();
}