package com.rk.service;

import com.rk.entity.Xiyaozhongchengyaob;

public interface XiyaozhongchengyaobService {
    int deleteByPrimaryKey(Integer xyid);

    int insert(Xiyaozhongchengyaob record);

    int insertSelective(Xiyaozhongchengyaob record);

    Xiyaozhongchengyaob selectByPrimaryKey(Integer xyid);

    int updateByPrimaryKeySelective(Xiyaozhongchengyaob record);

    int updateByPrimaryKey(Xiyaozhongchengyaob record);
}