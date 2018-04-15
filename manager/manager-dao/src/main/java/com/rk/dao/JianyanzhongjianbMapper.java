package com.rk.dao;

import com.rk.entity.Jianyanzhongjianb;

public interface JianyanzhongjianbMapper {
    int deleteByPrimaryKey(Integer jianyanid);

    int insert(Jianyanzhongjianb record);

    int insertSelective(Jianyanzhongjianb record);

    Jianyanzhongjianb selectByPrimaryKey(Integer jianyanid);

    int updateByPrimaryKeySelective(Jianyanzhongjianb record);

    int updateByPrimaryKey(Jianyanzhongjianb record);
}