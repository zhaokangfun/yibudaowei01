package com.rk.entity;

import java.io.Serializable;

public class Jiwangshib  implements Serializable {
    private Integer jwsid;

    private String jwsms;

    public Integer getJwsid() {
        return jwsid;
    }

    public void setJwsid(Integer jwsid) {
        this.jwsid = jwsid;
    }

    public String getJwsms() {
        return jwsms;
    }

    public void setJwsms(String jwsms) {
        this.jwsms = jwsms;
    }
}