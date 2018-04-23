package com.rk.dao;

import java.util.List;

import com.rk.entity.Yuyuehcb;

public interface YuyuehcbMapper {
    int deleteByPrimaryKey(Integer yyhcid);

    int insert(Yuyuehcb record);

    int insertSelective(Yuyuehcb record);

    Yuyuehcb selectByPrimaryKey(Integer yyhcid);

    int updateBy(Yuyuehcb record);

    int updateByPrimaryKey(Yuyuehcb record);
    
    List<Yuyuehcb> listAll();
}