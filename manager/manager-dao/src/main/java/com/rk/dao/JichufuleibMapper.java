package com.rk.dao;

import com.rk.entity.Jichufuleib;

public interface JichufuleibMapper {
    int deleteByPrimaryKey(Integer jcid);

    int insert(Jichufuleib record);

    int insertSelective(Jichufuleib record);

    Jichufuleib selectByPrimaryKey(Integer jcid);

    int updateByPrimaryKeySelective(Jichufuleib record);

    int updateByPrimaryKey(Jichufuleib record);
}