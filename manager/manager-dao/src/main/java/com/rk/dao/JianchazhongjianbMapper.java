package com.rk.dao;

import com.rk.entity.Jianchazhongjianb;

public interface JianchazhongjianbMapper {
    int deleteByPrimaryKey(Integer jianchaid);

    int insert(Jianchazhongjianb record);

    int insertSelective(Jianchazhongjianb record);

    Jianchazhongjianb selectByPrimaryKey(Integer jianchaid);

    int updateByPrimaryKeySelective(Jianchazhongjianb record);

    int updateByPrimaryKey(Jianchazhongjianb record);
}