package com.rk.entity;

import java.io.Serializable;

public class Cailiaotypeb  implements Serializable {
    private Integer cltypeid;

    private String cltypename;

    public Integer getCltypeid() {
        return cltypeid;
    }

    public void setCltypeid(Integer cltypeid) {
        this.cltypeid = cltypeid;
    }

    public String getCltypename() {
        return cltypename;
    }

    public void setCltypename(String cltypename) {
        this.cltypename = cltypename;
    }
}