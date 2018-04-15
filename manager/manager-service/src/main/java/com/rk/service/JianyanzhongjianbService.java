package com.rk.service;

import com.rk.entity.Jianyanzhongjianb;

public interface JianyanzhongjianbService {
    int deleteByPrimaryKey(Integer jianyanid);

    int insert(Jianyanzhongjianb record);

    int insertSelective(Jianyanzhongjianb record);

    Jianyanzhongjianb selectByPrimaryKey(Integer jianyanid);

    int updateByPrimaryKeySelective(Jianyanzhongjianb record);

    int updateByPrimaryKey(Jianyanzhongjianb record);
}