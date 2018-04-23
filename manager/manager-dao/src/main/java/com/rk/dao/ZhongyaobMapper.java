package com.rk.dao;

import java.util.List;

import com.rk.entity.Zhongyaob;

public interface ZhongyaobMapper {
    int deleteByPrimaryKey(Integer zyid);

    int insert(Zhongyaob record);

    int insertSelective(Zhongyaob record);

    Zhongyaob selectByPrimaryKey(Integer zyid);

    int updateByPrimaryKeySelective(Zhongyaob record);

    int updateByPrimaryKey(Zhongyaob record);
    
    /**
     * 文本框查询
     * @return
     */
    List<Zhongyaob> textSelect(String pinyin);
    
    List<Zhongyaob> Gellzy();
    
    /**
     * 添加中药
     * @return
     */
    int addzy(Zhongyaob zy);
    //INSERT zhongyaob VALUES(DEFAULT,'123','123',1,'0.26',NULL,1,'003','g','g',2000,13,16,2,'qwe','qwe',1)
    //INSERT zhongyaob VALUES(DEFAULT,#{zyname},#{zyjdname},#{yptypeid},#{guige},#{scsid},#{gysid},#{ypbwnumber},#{lsdw},#{dwid},#{kczhl},#{lsprice},#{maxprice},#{yfid},#{wubi},#{pinyin},#{status})
}