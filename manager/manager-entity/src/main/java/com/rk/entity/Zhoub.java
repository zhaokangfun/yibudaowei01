package com.rk.entity;

import java.io.Serializable;

public class Zhoub  implements Serializable {
    private Integer zhouid;

    private String howtime;

    public Integer getZhouid() {
        return zhouid;
    }

    public void setZhouid(Integer zhouid) {
        this.zhouid = zhouid;
    }

    public String getHowtime() {
        return howtime;
    }

    public void setHowtime(String howtime) {
        this.howtime = howtime;
    }
}