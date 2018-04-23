package com.rk.entity;

import java.io.Serializable;

public class Roleb  implements Serializable {
    private Integer roleid;

    private String rolename;

    private Integer status;

    private String createtime;

    private Integer mzid;

    public Integer getRoleid() {
        return roleid;
    }

    public void setRoleid(Integer roleid) {
        this.roleid = roleid;
    }

    public String getRolename() {
        return rolename;
    }

    public void setRolename(String rolename) {
        this.rolename = rolename;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getCreatetime() {
        return createtime;
    }

    public void setCreatetime(String createtime) {
        this.createtime = createtime;
    }

    public Integer getMzid() {
        return mzid;
    }

    public void setMzid(Integer mzid) {
        this.mzid = mzid;
    }
}