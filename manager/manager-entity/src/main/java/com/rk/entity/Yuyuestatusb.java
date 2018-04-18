package com.rk.entity;

import java.io.Serializable;

public class Yuyuestatusb  implements Serializable {
    private Integer yystatusid;

    private String yystatusname;

    public Integer getYystatusid() {
        return yystatusid;
    }

    public void setYystatusid(Integer yystatusid) {
        this.yystatusid = yystatusid;
    }

    public String getYystatusname() {
        return yystatusname;
    }

    public void setYystatusname(String yystatusname) {
        this.yystatusname = yystatusname;
    }
}