package com.rk.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.rk.entity.Yuyueguizeb;

public interface YuyueguizebMapper {
    int deleteByPrimaryKey(Integer yygzid);

    int insert(Yuyueguizeb record);

    int insertSelective(Yuyueguizeb record);

    Yuyueguizeb selectByPrimaryKey(Integer yygzid);

    int updateBy(@Param("zhi")String zhi,@Param("id")int id);

    int updateByPrimaryKey(Yuyueguizeb record);
    
    List<Yuyueguizeb> SelectAll();
}