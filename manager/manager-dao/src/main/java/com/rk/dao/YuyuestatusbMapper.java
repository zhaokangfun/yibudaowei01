package com.rk.dao;

import com.rk.entity.Yuyuestatusb;

public interface YuyuestatusbMapper {
    int deleteByPrimaryKey(Integer yystatusid);

    int insert(Yuyuestatusb record);

    int insertSelective(Yuyuestatusb record);

    Yuyuestatusb selectByPrimaryKey(Integer yystatusid);

    int updateByPrimaryKeySelective(Yuyuestatusb record);

    int updateByPrimaryKey(Yuyuestatusb record);
}