package com.rk.entity;

import java.io.Serializable;

public class Yongfab implements Serializable {

    private Integer yfid;

    private String yfname;

    private Integer yndifen;

    public Integer getYfid() {
        return yfid;
    }

    public void setYfid(Integer yfid) {
        this.yfid = yfid;
    }

    public String getYfname() {
        return yfname;
    }

    public void setYfname(String yfname) {
        this.yfname = yfname;
    }

    public Integer getYndifen() {
        return yndifen;
    }

    public void setYndifen(Integer yndifen) {
        this.yndifen = yndifen;
    }
}