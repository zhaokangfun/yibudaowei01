package com.rk.service;

import java.util.List;


import com.rk.entity.Rukub;
import com.rk.entity.Zhongyaob;

public interface RukubService {
    int deleteByPrimaryKey(Integer rkid);

    int insert(Rukub record);

    int insertSelective(Rukub record);

    Rukub selectByPrimaryKey(Integer rkid);

    int updateByPrimaryKeySelective(Rukub record);

    int updateByPrimaryKey(Rukub record);
    
    /**
     * 查询全部入库信息！
     * @return
     */
    List<Rukub> Gellrk();
    
    /** 
     * 删除入库
     * @return
     */
    int delerk(Integer rkid);
    
    /**
     * 文本框查询
     * @return
     */
    List<Zhongyaob> textSelect(String pinyin);
}