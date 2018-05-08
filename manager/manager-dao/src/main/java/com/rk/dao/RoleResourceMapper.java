package com.rk.dao;

import com.rk.entity.RoleResource;

public interface RoleResourceMapper {
    int insert(RoleResource record);

	int insertSelective(RoleResource record);
}