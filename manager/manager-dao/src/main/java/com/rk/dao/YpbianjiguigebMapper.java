package com.rk.dao;

import com.rk.entity.Ypbianjiguigeb;

public interface YpbianjiguigebMapper {
    int deleteByPrimaryKey(Integer ybbianjiid);

    int insert(Ypbianjiguigeb record);

    int insertSelective(Ypbianjiguigeb record);

    Ypbianjiguigeb selectByPrimaryKey(Integer ybbianjiid);

    int updateByPrimaryKeySelective(Ypbianjiguigeb record);

    int updateByPrimaryKey(Ypbianjiguigeb record);
}