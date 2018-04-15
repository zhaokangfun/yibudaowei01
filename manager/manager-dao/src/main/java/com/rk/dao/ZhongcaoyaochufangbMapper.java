package com.rk.dao;

import com.rk.entity.Zhongcaoyaochufangb;

public interface ZhongcaoyaochufangbMapper {
    int deleteByPrimaryKey(Integer zcaoyid);

    int insert(Zhongcaoyaochufangb record);

    int insertSelective(Zhongcaoyaochufangb record);

    Zhongcaoyaochufangb selectByPrimaryKey(Integer zcaoyid);

    int updateByPrimaryKeySelective(Zhongcaoyaochufangb record);

    int updateByPrimaryKey(Zhongcaoyaochufangb record);
}