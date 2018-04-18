package com.rk.entity;

import java.io.Serializable;


public class Guominshib   implements Serializable {

    private Integer gmsid;

    private String gmsname;

    public Integer getGmsid() {
        return gmsid;
    }

    public void setGmsid(Integer gmsid) {
        this.gmsid = gmsid;
    }

    public String getGmsname() {
        return gmsname;
    }

    public void setGmsname(String gmsname) {
        this.gmsname = gmsname;
    }
}