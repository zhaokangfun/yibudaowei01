package com.rk.service;

import com.rk.entity.Jichufuleib;

public interface JichufuleibService {
    int deleteByPrimaryKey(Integer jcid);

    int insert(Jichufuleib record);

    int insertSelective(Jichufuleib record);

    Jichufuleib selectByPrimaryKey(Integer jcid);

    int updateByPrimaryKeySelective(Jichufuleib record);

    int updateByPrimaryKey(Jichufuleib record);
}