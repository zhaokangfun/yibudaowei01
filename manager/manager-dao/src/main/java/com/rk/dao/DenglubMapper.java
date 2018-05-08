package com.rk.dao;

import org.apache.ibatis.annotations.Param;
import java.util.List;

import com.rk.entity.Denglub;

public interface DenglubMapper {
    int deleteByPrimaryKey(Integer adminid);

    int insert(Denglub record);

    int insertSelective(Denglub record);

    Denglub selectByPrimaryKey(Integer adminid);

    int updateByPrimaryKeySelective(Denglub record);

    int updateByPrimaryKey(Denglub record);
    
    Denglub dologin(@Param("adminzh") String adminzh,@Param("password") String password);
    List<Denglub> listAll();
    List<Denglub> listkeshi(@Param("parentId")int parentId);
    
}