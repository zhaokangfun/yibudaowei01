package com.rk.entity;

import java.io.Serializable;

public class Jianyanzhongjianb   implements Serializable {
    private Integer jianyanid;

    private Integer hzid;

    private String biaoben;

    public Integer getJianyanid() {
        return jianyanid;
    }

    public void setJianyanid(Integer jianyanid) {
        this.jianyanid = jianyanid;
    }

    public Integer getHzid() {
        return hzid;
    }

    public void setHzid(Integer hzid) {
        this.hzid = hzid;
    }

    public String getBiaoben() {
        return biaoben;
    }

    public void setBiaoben(String biaoben) {
        this.biaoben = biaoben;
    }
}