package com.rk.entity;

import java.io.Serializable;


public class Jixingb   implements Serializable {

    private Integer jxid;

    private String jixingname;

    public Integer getJxid() {
        return jxid;
    }

    public void setJxid(Integer jxid) {
        this.jxid = jxid;
    }

    public String getJixingname() {
        return jixingname;
    }

    public void setJixingname(String jixingname) {
        this.jixingname = jixingname;
    }
}