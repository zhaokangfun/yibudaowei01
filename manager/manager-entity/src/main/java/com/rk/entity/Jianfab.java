package com.rk.entity;

import java.io.Serializable;

public class Jianfab implements Serializable  {
    private Integer jianfaid;

    private String name;

    public Integer getJianfaid() {
        return jianfaid;
    }

    public void setJianfaid(Integer jianfaid) {
        this.jianfaid = jianfaid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}