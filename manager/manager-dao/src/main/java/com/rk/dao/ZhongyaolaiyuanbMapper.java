package com.rk.dao;

import com.rk.entity.Zhongyaolaiyuanb;

public interface ZhongyaolaiyuanbMapper {
    int deleteByPrimaryKey(Integer zylyid);

    int insert(Zhongyaolaiyuanb record);

    int insertSelective(Zhongyaolaiyuanb record);

    Zhongyaolaiyuanb selectByPrimaryKey(Integer zylyid);

    int updateByPrimaryKeySelective(Zhongyaolaiyuanb record);

    int updateByPrimaryKey(Zhongyaolaiyuanb record);
}