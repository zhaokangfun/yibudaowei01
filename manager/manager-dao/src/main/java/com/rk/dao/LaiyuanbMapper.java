package com.rk.dao;

import java.util.List;

import com.rk.entity.Laiyuanb;

public interface LaiyuanbMapper {
    int deleteByPrimaryKey(Integer lyid);

    int insert(Laiyuanb record);

    int insertSelective(Laiyuanb record);

    Laiyuanb selectByPrimaryKey(Integer lyid);

    int updateByPrimaryKeySelective(Laiyuanb record);

    int updateByPrimaryKey(Laiyuanb record);

    //全部来源
    List<Laiyuanb> listall();
    /**
     * 来源
     * @return
     */
    List<Laiyuanb> Gelllaiyuan();
    
    
    
    /**
     * 来源id
     * @return
     */
    Laiyuanb ylidgell(int lyid);
    
    /**
     * 来源添加
     * @param
     * @return
     */
    int lyadd(String lyname);
    
    int idhq();

}