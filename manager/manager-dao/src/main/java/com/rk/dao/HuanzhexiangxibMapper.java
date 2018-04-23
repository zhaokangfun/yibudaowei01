package com.rk.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.rk.entity.Huanzhexiangxib;

public interface HuanzhexiangxibMapper {
    int deleteByPrimaryKey(Integer hzid);

    int insert(Huanzhexiangxib record);

    int insertSelective(Huanzhexiangxib record);

    Huanzhexiangxib selectByPrimaryKey(Integer hzid);

    int updateByPrimaryKeySelective(Huanzhexiangxib record);

    int updateByPrimaryKey(Huanzhexiangxib record);
    
    List<Huanzhexiangxib> listOnjzStatics(Integer jzstatus);
    
    int updatebyhzStatus (@Param("hzid") Integer hzid,@Param("status") Integer status);	
}