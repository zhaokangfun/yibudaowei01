package com.rk.service;

import com.rk.entity.Roleb;

public interface RolebService {
    int deleteByPrimaryKey(Integer roleid);

    int insert(Roleb record);

    int insertSelective(Roleb record);

    Roleb selectByPrimaryKey(Integer roleid);

    int updateByPrimaryKeySelective(Roleb record);

    int updateByPrimaryKey(Roleb record);
}