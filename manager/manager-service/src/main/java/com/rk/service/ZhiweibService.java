package com.rk.service;

import java.util.List;

import com.rk.entity.Zhiweib;

public interface ZhiweibService {
    int deleteByPrimaryKey(Integer zhiweiid);

    int insert(Zhiweib record);

    int insertSelective(Zhiweib record);

    Zhiweib selectByPrimaryKey(Integer zhiweiid);

    int updateByPrimaryKeySelective(Zhiweib record);

    int updateByPrimaryKey(Zhiweib record);
    
    List<Zhiweib> Gellyszhiwei();
    
    
    /**
     * 启用查询
     * @return
     */
    List<Zhiweib> qiyong();
    
    List<Zhiweib> jinyong();
    
    int addzw(Zhiweib zw);
}