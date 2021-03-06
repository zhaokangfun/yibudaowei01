package com.rk.dao;

import java.util.List;

import com.rk.entity.Cailiaob;

public interface CailiaobMapper {
    int deleteByPrimaryKey(Integer clid);

    int insert(Cailiaob record);

    int insertSelective(Cailiaob record);

    Cailiaob selectByPrimaryKey(Integer clid);

    int updateByPrimaryKeySelective(Cailiaob record);

    int updateByPrimaryKey(Cailiaob record);
    
    List<Cailiaob> Gellcl();
    /**
     * 添加材料
     * @return
     */
    int addcailiao(Cailiaob cl);
}