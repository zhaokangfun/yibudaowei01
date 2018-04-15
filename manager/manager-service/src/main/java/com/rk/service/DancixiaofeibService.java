package com.rk.service;

import com.rk.entity.Dancixiaofeib;

public interface DancixiaofeibService {
    int deleteByPrimaryKey(Integer danciid);

    int insert(Dancixiaofeib record);

    int insertSelective(Dancixiaofeib record);

    Dancixiaofeib selectByPrimaryKey(Integer danciid);

    int updateByPrimaryKeySelective(Dancixiaofeib record);

    int updateByPrimaryKey(Dancixiaofeib record);
}