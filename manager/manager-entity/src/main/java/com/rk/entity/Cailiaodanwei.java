package com.rk.entity;

import java.io.Serializable;


public class Cailiaodanwei   implements Serializable{

    private Integer cldanweiid;

    private String cldanweiname;

    public Integer getCldanweiid() {
        return cldanweiid;
    }

    public void setCldanweiid(Integer cldanweiid) {
        this.cldanweiid = cldanweiid;
    }

    public String getCldanweiname() {
        return cldanweiname;
    }

    public void setCldanweiname(String cldanweiname) {
        this.cldanweiname = cldanweiname;
    }
}