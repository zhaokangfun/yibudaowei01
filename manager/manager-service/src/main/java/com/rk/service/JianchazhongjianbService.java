package com.rk.service;

import com.rk.entity.Jianchazhongjianb;

public interface JianchazhongjianbService {
    int deleteByPrimaryKey(Integer jianchaid);

    int insert(Jianchazhongjianb record);

    int insertSelective(Jianchazhongjianb record);

    Jianchazhongjianb selectByPrimaryKey(Integer jianchaid);

    int updateByPrimaryKeySelective(Jianchazhongjianb record);

    int updateByPrimaryKey(Jianchazhongjianb record);
}