package com.rk.entity;

import java.io.Serializable;


public class Rukufangshib implements Serializable {

    private Integer rkfangshi;

    private String rktype;

    public Integer getRkfangshi() {
        return rkfangshi;
    }

    public void setRkfangshi(Integer rkfangshi) {
        this.rkfangshi = rkfangshi;
    }

    public String getRktype() {
        return rktype;
    }

    public void setRktype(String rktype) {
        this.rktype = rktype;
    }
}