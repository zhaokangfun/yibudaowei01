package com.rk.entity;

import java.io.Serializable;


public class Zhongyaob  implements Serializable {
    private Integer zyid;

	private String zyname;

	private String zyjdname;

	private Integer yptypeid;

	private String guige;

	private Integer scsid;

	private Integer gysid;

	private String ypbwnumber;

	private Integer lsdw;

	private Integer dwid;

	private Double kczhl;

	private Double lsprice;

	private Double maxprice;

	private Integer yfid;

	private String wubi;

	private String pinyin;

	private Integer status;

	private Danweib dw;

	public Danweib getDw() {
		return dw;
	}

	public void setDw(Danweib dw) {
		this.dw = dw;
	}

	public Integer getZyid() {
		return zyid;
	}

	public void setZyid(Integer zyid) {
		this.zyid = zyid;
	}

	public String getZyname() {
		return zyname;
	}

	public void setZyname(String zyname) {
		this.zyname = zyname;
	}

	public String getZyjdname() {
		return zyjdname;
	}

	public void setZyjdname(String zyjdname) {
		this.zyjdname = zyjdname;
	}

	public Integer getYptypeid() {
		return yptypeid;
	}

	public void setYptypeid(Integer yptypeid) {
		this.yptypeid = yptypeid;
	}

	public String getGuige() {
		return guige;
	}

	public void setGuige(String guige) {
		this.guige = guige;
	}

	public Integer getScsid() {
		return scsid;
	}

	public void setScsid(Integer scsid) {
		this.scsid = scsid;
	}

	public Integer getGysid() {
		return gysid;
	}

	public void setGysid(Integer gysid) {
		this.gysid = gysid;
	}

	public String getYpbwnumber() {
		return ypbwnumber;
	}

	public void setYpbwnumber(String ypbwnumber) {
		this.ypbwnumber = ypbwnumber;
	}

	public Double getKczhl() {
		return kczhl;
	}

	public Integer getLsdw() {
		return lsdw;
	}

	public void setLsdw(Integer lsdw) {
		this.lsdw = lsdw;
	}

	public Integer getDwid() {
		return dwid;
	}

	public void setDwid(Integer dwid) {
		this.dwid = dwid;
	}

	public void setKczhl(Double kczhl) {
		this.kczhl = kczhl;
	}

	public Double getLsprice() {
		return lsprice;
	}

	public void setLsprice(Double lsprice) {
		this.lsprice = lsprice;
	}

	public Double getMaxprice() {
		return maxprice;
	}

	public void setMaxprice(Double maxprice) {
		this.maxprice = maxprice;
	}

	public Integer getYfid() {
		return yfid;
	}

	public void setYfid(Integer yfid) {
		this.yfid = yfid;
	}

	public String getWubi() {
		return wubi;
	}

	public void setWubi(String wubi) {
		this.wubi = wubi;
	}

	public String getPinyin() {
		return pinyin;
	}

	public void setPinyin(String pinyin) {
		this.pinyin = pinyin;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}
}