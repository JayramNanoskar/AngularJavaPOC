package com.angularcode.angular.model;

import java.util.Arrays;


public class GeneralTabDTO {
	
	private String ciNfId;
	private String ciCountryId;
	private String ciRoleId;
	private String ciOutBIC;
	private String ciRefNo;
	private String ciSsn;
	private String ciGenderId;
	private String gender;
	
	private String seNfid;
	private String seOutBIC;
	private String seGenderId;
	
	private String[] seCountryId;
	private String[] country;
	

	private InvInfoDTO info;
	
	
	
	public GeneralTabDTO() {
		super();
	}
	public String getCiNfId() {
		return ciNfId;
	}
	public void setCiNfId(String ciNfId) {
		this.ciNfId = ciNfId;
	}
	public String getCiCountryId() {
		return ciCountryId;
	}
	public void setCiCountryId(String ciCountryId) {
		this.ciCountryId = ciCountryId;
	}
	public String getCiRoleId() {
		return ciRoleId;
	}
	public void setCiRoleId(String ciRoleId) {
		this.ciRoleId = ciRoleId;
	}
	public String getCiOutBIC() {
		return ciOutBIC;
	}
	public void setCiOutBIC(String ciOutBIC) {
		this.ciOutBIC = ciOutBIC;
	}
	public String getCiRefNo() {
		return ciRefNo;
	}
	public void setCiRefNo(String ciRefNo) {
		this.ciRefNo = ciRefNo;
	}
	public String getCiSsn() {
		return ciSsn;
	}
	public void setCiSsn(String ciSsn) {
		this.ciSsn = ciSsn;
	}
	public String getCiGenderId() {
		return ciGenderId;
	}
	public void setCiGenderId(String ciGenderId) {
		this.ciGenderId = ciGenderId;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getSeNfid() {
		return seNfid;
	}
	public void setSeNfid(String seNfid) {
		this.seNfid = seNfid;
	}
	public String getSeOutBIC() {
		return seOutBIC;
	}
	public void setSeOutBIC(String seOutBIC) {
		this.seOutBIC = seOutBIC;
	}
	public String getSeGenderId() {
		return seGenderId;
	}
	public void setSeGenderId(String seGenderId) {
		this.seGenderId = seGenderId;
	}
	public String[] getSeCountryId() {
		return seCountryId;
	}
	public void setSeCountryId(String[] seCountryId) {
		this.seCountryId = seCountryId;
	}
	public String[] getCountry() {
		return country;
	}
	public void setCountry(String[] country) {
		this.country = country;
	}
	public InvInfoDTO getInfo() {
		return info;
	}
	public void setInfo(InvInfoDTO info) {
		this.info = info;
	}
	
	
}
