package com.rk.entity;

import java.io.Serializable;

public class Shijianduanb  implements Serializable {
    private Integer shijianduanid;

    private String sjdtime;

    public Integer getShijianduanid() {
        return shijianduanid;
    }

    public void setShijianduanid(Integer shijianduanid) {
        this.shijianduanid = shijianduanid;
    }

    public String getSjdtime() {
        return sjdtime;
    }

    public void setSjdtime(String sjdtime) {
        this.sjdtime = sjdtime;
    }
}