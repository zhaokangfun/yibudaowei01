package com.rk.entity;

import java.io.Serializable;

public class Laiyuanb  implements Serializable {
    private Integer lyid;

    private String lyname;

    public Integer getLyid() {
        return lyid;
    }

    public void setLyid(Integer lyid) {
        this.lyid = lyid;
    }

    public String getLyname() {
        return lyname;
    }

    public void setLyname(String lyname) {
        this.lyname = lyname;
    }
}