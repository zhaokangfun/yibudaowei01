package com.rk.entity;

import java.io.Serializable;


public class Jichufuleib   implements Serializable {

    private Integer jcid;

    private String shuoming;

    public Integer getJcid() {
        return jcid;
    }

    public void setJcid(Integer jcid) {
        this.jcid = jcid;
    }

    public String getShuoming() {
        return shuoming;
    }

    public void setShuoming(String shuoming) {
        this.shuoming = shuoming;
    }
}