package com.rk.dao;

import java.util.List;

import com.rk.entity.Rukub;

public interface RukubMapper {
    int deleteByPrimaryKey(Integer rkid);

    int insert(Rukub record);

    int insertSelective(Rukub record);

    Rukub selectByPrimaryKey(Integer rkid);

    int updateByPrimaryKeySelective(Rukub record);

    int updateByPrimaryKey(Rukub record);
    
    /**
     * 查询全部入库信息！
     * @return
     */
    List<Rukub>Gellrk();
}