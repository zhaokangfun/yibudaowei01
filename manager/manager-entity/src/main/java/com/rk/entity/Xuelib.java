package com.rk.entity;

import java.io.Serializable;

public class Xuelib implements Serializable {
    private Integer xueliid;

    private String xueliname;

    public Integer getXueliid() {
        return xueliid;
    }

    public void setXueliid(Integer xueliid) {
        this.xueliid = xueliid;
    }

    public String getXueliname() {
        return xueliname;
    }

    public void setXueliname(String xueliname) {
        this.xueliname = xueliname;
    }
}