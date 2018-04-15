package com.rk.service;

import com.rk.entity.Zhongcaoyaochufangb;

public interface ZhongcaoyaochufangbService {
    int deleteByPrimaryKey(Integer zcaoyid);

    int insert(Zhongcaoyaochufangb record);

    int insertSelective(Zhongcaoyaochufangb record);

    Zhongcaoyaochufangb selectByPrimaryKey(Integer zcaoyid);

    int updateByPrimaryKeySelective(Zhongcaoyaochufangb record);

    int updateByPrimaryKey(Zhongcaoyaochufangb record);
}