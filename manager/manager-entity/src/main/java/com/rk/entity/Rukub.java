package com.rk.entity;

import java.io.Serializable;

public class Rukub  implements Serializable {
    private Integer rkid;

    private String rknumber;

    private String rktime;

    private Integer rktypeid;

    private Integer gysid;

    private String beizhu;

    private Double gouruprice;

    private String rkcount;

    private Integer status;

    private Integer yaopinid;

    private String yaopinname;
    
    //入库方式拓展实体类
    private Rukufangshib rkfs;
    
    //供应啥拓展实体类
    private Gongyingshangb gys;
    
    
    

	public Rukufangshib getRkfs() {
		return rkfs;
	}

	public void setRkfs(Rukufangshib rkfs) {
		this.rkfs = rkfs;
	}

	public Gongyingshangb getGys() {
		return gys;
	}

	public void setGys(Gongyingshangb gys) {
		this.gys = gys;
	}

	public Integer getRkid() {
        return rkid;
    }

    public void setRkid(Integer rkid) {
        this.rkid = rkid;
    }

    public String getRknumber() {
        return rknumber;
    }

    public void setRknumber(String rknumber) {
        this.rknumber = rknumber;
    }

    public String getRktime() {
        return rktime;
    }

    public void setRktime(String rktime) {
        this.rktime = rktime;
    }

    public Integer getRktypeid() {
        return rktypeid;
    }

    public void setRktypeid(Integer rktypeid) {
        this.rktypeid = rktypeid;
    }

    public Integer getGysid() {
        return gysid;
    }

    public void setGysid(Integer gysid) {
        this.gysid = gysid;
    }

    public String getBeizhu() {
        return beizhu;
    }

    public void setBeizhu(String beizhu) {
        this.beizhu = beizhu;
    }

    public Double getGouruprice() {
        return gouruprice;
    }

    public void setGouruprice(Double gouruprice) {
        this.gouruprice = gouruprice;
    }

    public String getRkcount() {
        return rkcount;
    }

    public void setRkcount(String rkcount) {
        this.rkcount = rkcount;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getYaopinid() {
        return yaopinid;
    }

    public void setYaopinid(Integer yaopinid) {
        this.yaopinid = yaopinid;
    }

    public String getYaopinname() {
        return yaopinname;
    }

    public void setYaopinname(String yaopinname) {
        this.yaopinname = yaopinname;
    }
}