package com.rk.entity;

import java.io.Serializable;

public class Zhifub  implements Serializable {
    private Integer zfid;

    private String zhifuname;

    private Integer stauts;

    public Integer getZfid() {
        return zfid;
    }

    public void setZfid(Integer zfid) {
        this.zfid = zfid;
    }

    public String getZhifuname() {
        return zhifuname;
    }

    public void setZhifuname(String zhifuname) {
        this.zhifuname = zhifuname;
    }

    public Integer getStauts() {
        return stauts;
    }

    public void setStauts(Integer stauts) {
        this.stauts = stauts;
    }
}