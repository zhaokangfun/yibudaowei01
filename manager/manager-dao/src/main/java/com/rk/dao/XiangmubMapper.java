package com.rk.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.rk.entity.Xiangmub;

public interface XiangmubMapper {
    int insert(Xiangmub record);

    int insertSelective(Xiangmub record);
    /**
     * 组合项目表
     * @return
     */
    List<Xiangmub> Gellzhxm(int zhlx);
}