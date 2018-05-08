package com.rk.service;

import java.util.List;

import com.rk.entity.Zhongyaob;

public interface ZhongyaobService {
    int deleteByPrimaryKey(Integer zyid);

    int insert(Zhongyaob record);

    int insertSelective(Zhongyaob record);

    Zhongyaob selectByPrimaryKey(Integer zyid);

    int updateByPrimaryKeySelective(Zhongyaob record);

    int updateByPrimaryKey(Zhongyaob record);
    
    /**
     * 中药
     * @return
     */
    List<Zhongyaob> Gellzy();
    
    /**
     * 添加中药
     * @return
     */
    int addzy(Zhongyaob zy);
}