package com.rk.service;

import com.rk.entity.RoleResource;

public interface RoleResourceService {
    int insert(RoleResource record);

	int insertSelective(RoleResource record);
}