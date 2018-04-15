package com.rk.service;

import com.rk.entity.Cailiaotypeb;

public interface CailiaotypebService {
    int deleteByPrimaryKey(Integer cltypeid);

    int insert(Cailiaotypeb record);

    int insertSelective(Cailiaotypeb record);

    Cailiaotypeb selectByPrimaryKey(Integer cltypeid);

    int updateByPrimaryKeySelective(Cailiaotypeb record);

    int updateByPrimaryKey(Cailiaotypeb record);
}