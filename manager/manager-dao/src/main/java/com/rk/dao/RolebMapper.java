package com.rk.dao;

import java.util.List;

import com.rk.entity.Roleb;

public interface RolebMapper {
    int deleteByPrimaryKey(Integer roleid);

    int insert(Roleb record);

    int insertSelective(Roleb record);

    Roleb selectByPrimaryKey(Integer roleid);

    int updateByPrimaryKeySelective(Roleb record);

    int updateByPrimaryKey(Roleb record);
    
    List<Roleb> getAll();
}