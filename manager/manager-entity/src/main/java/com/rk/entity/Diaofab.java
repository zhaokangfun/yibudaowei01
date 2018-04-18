package com.rk.entity;

import java.io.Serializable;

public class Diaofab   implements Serializable {
    private Integer dfid;

    private String name;

    public Integer getDfid() {
        return dfid;
    }

    public void setDfid(Integer dfid) {
        this.dfid = dfid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}