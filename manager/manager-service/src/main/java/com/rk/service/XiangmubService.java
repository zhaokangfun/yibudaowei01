package com.rk.service;

import java.util.List;


import com.rk.entity.Xiangmub;

public interface XiangmubService {
    int insert(Xiangmub record);

    int insertSelective(Xiangmub record);
    
    /**
     * 组合项目表
     * @return
     */
    List<Xiangmub> Gellzhxm(int zhlx);
}