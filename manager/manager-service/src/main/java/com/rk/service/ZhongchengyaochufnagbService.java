package com.rk.service;

import com.rk.entity.Zhongchengyaochufnagb;

public interface ZhongchengyaochufnagbService {
    int deleteByPrimaryKey(Integer zchengyid);

    int insert(Zhongchengyaochufnagb record);

    int insertSelective(Zhongchengyaochufnagb record);

    Zhongchengyaochufnagb selectByPrimaryKey(Integer zchengyid);

    int updateByPrimaryKeySelective(Zhongchengyaochufnagb record);

    int updateByPrimaryKey(Zhongchengyaochufnagb record);
}