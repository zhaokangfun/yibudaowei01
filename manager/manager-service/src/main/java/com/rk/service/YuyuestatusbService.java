package com.rk.service;

import com.rk.entity.Yuyuestatusb;

public interface YuyuestatusbService {
    int deleteByPrimaryKey(Integer yystatusid);

    int insert(Yuyuestatusb record);

    int insertSelective(Yuyuestatusb record);

    Yuyuestatusb selectByPrimaryKey(Integer yystatusid);

    int updateByPrimaryKeySelective(Yuyuestatusb record);

    int updateByPrimaryKey(Yuyuestatusb record);
}