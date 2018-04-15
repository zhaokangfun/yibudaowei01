package com.rk.service;

import com.rk.entity.Xiyaochufangb;

public interface XiyaochufangbService {
    int deleteByPrimaryKey(Integer xiyaochufangid);

    int insert(Xiyaochufangb record);

    int insertSelective(Xiyaochufangb record);

    Xiyaochufangb selectByPrimaryKey(Integer xiyaochufangid);

    int updateByPrimaryKeySelective(Xiyaochufangb record);

    int updateByPrimaryKey(Xiyaochufangb record);
}