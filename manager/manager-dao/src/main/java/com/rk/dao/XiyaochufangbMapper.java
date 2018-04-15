package com.rk.dao;

import com.rk.entity.Xiyaochufangb;

public interface XiyaochufangbMapper {
    int deleteByPrimaryKey(Integer xiyaochufangid);

    int insert(Xiyaochufangb record);

    int insertSelective(Xiyaochufangb record);

    Xiyaochufangb selectByPrimaryKey(Integer xiyaochufangid);

    int updateByPrimaryKeySelective(Xiyaochufangb record);

    int updateByPrimaryKey(Xiyaochufangb record);
}