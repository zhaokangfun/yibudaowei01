package com.rk.service;

import java.util.List;

import com.rk.entity.Huanzhexiangxib;

public interface HuanzhexiangxibService {
    int deleteByPrimaryKey(Integer hzid);

    int insert(Huanzhexiangxib record);

    int insertSelective(Huanzhexiangxib record);

    Huanzhexiangxib selectByPrimaryKey(Integer hzid);

    int updateByPrimaryKeySelective(Huanzhexiangxib record);

    int updateByPrimaryKey(Huanzhexiangxib record);
    
    List<Huanzhexiangxib> listOnjzStatics(Integer jzstatus);
    
    int updatebyhzStatus (Integer hzid,Integer status);	
}