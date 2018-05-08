package com.rk.service;

import java.util.List;


import com.rk.entity.Denglub;

public interface DenglubService {
    int deleteByPrimaryKey(Integer adminid);

    int insert(Denglub record);

    int insertSelective(Denglub record);

    Denglub selectByPrimaryKey(Integer adminid);

    int updateByPrimaryKeySelective(Denglub record);

    int updateByPrimaryKey(Denglub record);
    
    Denglub dologin(String adminzh,String password);
    
    List<Denglub> listAll();
    
    List<Denglub> listkeshi(int parentId);
}