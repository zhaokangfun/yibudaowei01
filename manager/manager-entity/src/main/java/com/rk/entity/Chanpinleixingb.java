package com.rk.entity;

import java.io.Serializable;

public class Chanpinleixingb  implements Serializable {
    private Integer cptypeid;

    private String cptypename;

    public Integer getCptypeid() {
        return cptypeid;
    }

    public void setCptypeid(Integer cptypeid) {
        this.cptypeid = cptypeid;
    }

    public String getCptypename() {
        return cptypename;
    }

    public void setCptypename(String cptypename) {
        this.cptypename = cptypename;
    }
}