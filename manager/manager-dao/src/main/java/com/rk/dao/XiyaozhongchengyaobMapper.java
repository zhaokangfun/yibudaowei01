package com.rk.dao;

import java.util.List;

import com.rk.entity.Xiyaozhongchengyaob;

public interface XiyaozhongchengyaobMapper {
    int deleteByPrimaryKey(Integer xyid);

    int insert(Xiyaozhongchengyaob record);

    int insertSelective(Xiyaozhongchengyaob record);

    Xiyaozhongchengyaob selectByPrimaryKey(Integer xyid);

    int updateByPrimaryKeySelective(Xiyaozhongchengyaob record);

    int updateByPrimaryKey(Xiyaozhongchengyaob record);
    
    /*
     * 西药中成药信息
     */
    List<Xiyaozhongchengyaob> Gellxizhong();
    
    /**
     * 添加
     * @return
     */
    int xizhongadd(Xiyaozhongchengyaob xz);
}