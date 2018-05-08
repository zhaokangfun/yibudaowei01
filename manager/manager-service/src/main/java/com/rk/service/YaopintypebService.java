package com.rk.service;

import java.util.List;

import com.rk.entity.Yaopintypeb;

public interface YaopintypebService {
    int deleteByPrimaryKey(Integer yptypeid);

    int insert(Yaopintypeb record);

    int insertSelective(Yaopintypeb record);

    Yaopintypeb selectByPrimaryKey(Integer yptypeid);

    int updateByPrimaryKeySelective(Yaopintypeb record);

    int updateByPrimaryKey(Yaopintypeb record);
    
    /**
     * 查询全部
     * @return
     */
    List<Yaopintypeb> Gellyptype();
    
    /**
     * 查询自增id
     * @return
     */
    int maxid();
    
    /**
     * 根据id返回实体类
     * @return
     */
    Yaopintypeb idselect(int yptypeid);
    
    /**
     * 添加
     * @return
     */
    int yptypeadd(Yaopintypeb record);
}