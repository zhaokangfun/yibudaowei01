package com.rk.service;

import java.util.List;

import com.rk.entity.Zhiliaoxiangmub;

public interface ZhiliaoxiangmubService {
    int deleteByPrimaryKey(Integer zlxmid);

    int insert(Zhiliaoxiangmub record);

    int insertSelective(Zhiliaoxiangmub record);

    Zhiliaoxiangmub selectByPrimaryKey(Integer zlxmid);

    int updateByPrimaryKeySelective(Zhiliaoxiangmub record);

    int updateByPrimaryKey(Zhiliaoxiangmub record);
    
    /**
     * 治疗项目信息
     * @return
     */
    List<Zhiliaoxiangmub> Gellzllist();
    
    int addzlxm(Zhiliaoxiangmub zlxmb);
}