package com.rk.entity;

import java.io.Serializable;


public class Lianxirentypeb   implements Serializable {

    private Integer lxrtypeid;

    private String lxrtype;

    public Integer getLxrtypeid() {
        return lxrtypeid;
    }

    public void setLxrtypeid(Integer lxrtypeid) {
        this.lxrtypeid = lxrtypeid;
    }

    public String getLxrtype() {
        return lxrtype;
    }

    public void setLxrtype(String lxrtype) {
        this.lxrtype = lxrtype;
    }
}