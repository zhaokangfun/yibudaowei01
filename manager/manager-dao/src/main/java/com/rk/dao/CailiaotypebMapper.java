package com.rk.dao;

import com.rk.entity.Cailiaotypeb;

public interface CailiaotypebMapper {
    int deleteByPrimaryKey(Integer cltypeid);

    int insert(Cailiaotypeb record);

    int insertSelective(Cailiaotypeb record);

    Cailiaotypeb selectByPrimaryKey(Integer cltypeid);

    int updateByPrimaryKeySelective(Cailiaotypeb record);

    int updateByPrimaryKey(Cailiaotypeb record);
}