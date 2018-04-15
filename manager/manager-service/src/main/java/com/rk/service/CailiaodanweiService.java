package com.rk.service;

import com.rk.entity.Cailiaodanwei;

public interface CailiaodanweiService {
    int deleteByPrimaryKey(Integer cldanweiid);

    int insert(Cailiaodanwei record);

    int insertSelective(Cailiaodanwei record);

    Cailiaodanwei selectByPrimaryKey(Integer cldanweiid);

    int updateByPrimaryKeySelective(Cailiaodanwei record);

    int updateByPrimaryKey(Cailiaodanwei record);
}