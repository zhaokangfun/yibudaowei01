package com.rk.entity;

import java.io.Serializable;


public class Chuukufangshib   implements Serializable{

    private Integer ckfsid;

    private String cktype;

    public Integer getCkfsid() {
        return ckfsid;
    }

    public void setCkfsid(Integer ckfsid) {
        this.ckfsid = ckfsid;
    }

    public String getCktype() {
        return cktype;
    }

    public void setCktype(String cktype) {
        this.cktype = cktype;
    }
}