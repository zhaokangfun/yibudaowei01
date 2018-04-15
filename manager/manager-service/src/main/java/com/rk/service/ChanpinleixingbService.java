package com.rk.service;

import com.rk.entity.Chanpinleixingb;

public interface ChanpinleixingbService {
    int deleteByPrimaryKey(Integer cptypeid);

    int insert(Chanpinleixingb record);

    int insertSelective(Chanpinleixingb record);

    Chanpinleixingb selectByPrimaryKey(Integer cptypeid);

    int updateByPrimaryKeySelective(Chanpinleixingb record);

    int updateByPrimaryKey(Chanpinleixingb record);
}