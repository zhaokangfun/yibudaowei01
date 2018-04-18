package com.rk.entity;

import java.io.Serializable;

public class Keshishuxing  implements Serializable {
    private Integer keshishuxingid;

    private String keshishuxingname;

    private Integer status;

    public Integer getKeshishuxingid() {
        return keshishuxingid;
    }

    public void setKeshishuxingid(Integer keshishuxingid) {
        this.keshishuxingid = keshishuxingid;
    }

    public String getKeshishuxingname() {
        return keshishuxingname;
    }

    public void setKeshishuxingname(String keshishuxingname) {
        this.keshishuxingname = keshishuxingname;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}