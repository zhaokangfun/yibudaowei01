package com.rk.entity;

import java.io.Serializable;

public class Bancib implements Serializable {
    private Integer banciid;

    private String banciname;

    public Integer getBanciid() {
        return banciid;
    }

    public void setBanciid(Integer banciid) {
        this.banciid = banciid;
    }

    public String getBanciname() {
        return banciname;
    }

    public void setBanciname(String banciname) {
        this.banciname = banciname;
    }
}