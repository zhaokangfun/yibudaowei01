package com.rk.entity;

import java.io.Serializable;

public class Zhongyaolaiyuanb  implements Serializable {
    private Integer zylyid;

    private String name;

    public Integer getZylyid() {
        return zylyid;
    }

    public void setZylyid(Integer zylyid) {
        this.zylyid = zylyid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}