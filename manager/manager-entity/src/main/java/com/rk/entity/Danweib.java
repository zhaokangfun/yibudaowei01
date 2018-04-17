package com.rk.entity;

import java.io.Serializable;

public class Danweib   implements Serializable{
    private Integer dwid;

    private String dwname;

    public Integer getDwid() {
        return dwid;
    }

    public void setDwid(Integer dwid) {
        this.dwid = dwid;
    }

    public String getDwname() {
        return dwname;
    }

    public void setDwname(String dwname) {
        this.dwname = dwname;
    }
}