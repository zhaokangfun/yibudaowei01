package com.rk.service;

import com.rk.entity.Zhiliaoxiangmuzhongjianb;

public interface ZhiliaoxiangmuzhongjianbService {
    int deleteByPrimaryKey(Integer zlid);

    int insert(Zhiliaoxiangmuzhongjianb record);

    int insertSelective(Zhiliaoxiangmuzhongjianb record);

    Zhiliaoxiangmuzhongjianb selectByPrimaryKey(Integer zlid);

    int updateByPrimaryKeySelective(Zhiliaoxiangmuzhongjianb record);

    int updateByPrimaryKey(Zhiliaoxiangmuzhongjianb record);
}