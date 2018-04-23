package com.rk.entity;

import java.io.Serializable;

public class Buweib implements Serializable  {
    private Integer buweiid;

    private String name;

    public Integer getBuweiid() {
        return buweiid;
    }

    public void setBuweiid(Integer buweiid) {
        this.buweiid = buweiid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}