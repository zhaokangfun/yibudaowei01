package com.rk.dao;

import com.rk.entity.Cailiaodanwei;

public interface CailiaodanweiMapper {
    int deleteByPrimaryKey(Integer cldanweiid);

    int insert(Cailiaodanwei record);

    int insertSelective(Cailiaodanwei record);

    Cailiaodanwei selectByPrimaryKey(Integer cldanweiid);

    int updateByPrimaryKeySelective(Cailiaodanwei record);

    int updateByPrimaryKey(Cailiaodanwei record);
}