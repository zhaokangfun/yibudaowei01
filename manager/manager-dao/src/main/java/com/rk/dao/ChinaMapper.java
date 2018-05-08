package com.rk.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.rk.entity.China;

public interface ChinaMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(China record);

    int insertSelective(China record);

    China selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(China record);

    int updateByPrimaryKey(China record);
    
    List<China> listall(@Param("pid")int pid);
}