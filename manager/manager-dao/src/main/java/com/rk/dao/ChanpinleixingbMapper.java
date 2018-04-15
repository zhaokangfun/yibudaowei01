package com.rk.dao;

import com.rk.entity.Chanpinleixingb;

public interface ChanpinleixingbMapper {
    int deleteByPrimaryKey(Integer cptypeid);

    int insert(Chanpinleixingb record);

    int insertSelective(Chanpinleixingb record);

    Chanpinleixingb selectByPrimaryKey(Integer cptypeid);

    int updateByPrimaryKeySelective(Chanpinleixingb record);

    int updateByPrimaryKey(Chanpinleixingb record);
}