package com.rk.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

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
    List<Rukub> Gellrk();
    
    /** 
     * 删除入库
     * @return
     */
    int delerk(Integer rkid);
}