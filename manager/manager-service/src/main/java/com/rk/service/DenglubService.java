package com.rk.service;

import com.rk.entity.Denglub;

public interface DenglubService {
    int deleteByPrimaryKey(Integer adminid);

    int insert(Denglub record);

    int insertSelective(Denglub record);

    Denglub selectByPrimaryKey(Integer adminid);

    int updateByPrimaryKeySelective(Denglub record);

    int updateByPrimaryKey(Denglub record);
    
    Denglub dologin(String adminzh,String password);
}