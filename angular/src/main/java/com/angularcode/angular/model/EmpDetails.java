package com.angularcode.angular.model;

import java.util.Arrays;


public class EmpDetails {
	
	private String perEmpId;
	private String[] perCountryId;
	private String perGenderId;
	private String perMobile;
	private String edHscPer;
	private String edSscPer;
	private String edDegreePer;
	private String edDegree;
	private String profTotExp;
	private String profExpCurrComp;
	private String profCurrComp;
	
	private String ceCountryId;
	private String ceEadd;
	private String ceEmpId;
	private String ceEsn;
	private String ceGenderId;
	private String ceMobile;
	private String ceRoleId;
	
	
	
	
	public String getCeCountryId() {
		return ceCountryId;
	}
	public void setCeCountryId(String ceCountryId) {
		this.ceCountryId = ceCountryId;
	}
	public String getCeEadd() {
		return ceEadd;
	}
	public void setCeEadd(String ceEadd) {
		this.ceEadd = ceEadd;
	}
	public String getCeEmpId() {
		return ceEmpId;
	}
	public void setCeEmpId(String ceEmpId) {
		this.ceEmpId = ceEmpId;
	}
	public String getCeEsn() {
		return ceEsn;
	}
	public void setCeEsn(String ceEsn) {
		this.ceEsn = ceEsn;
	}
	public String getCeGenderId() {
		return ceGenderId;
	}
	public void setCeGenderId(String ceGenderId) {
		this.ceGenderId = ceGenderId;
	}
	public String getCeMobile() {
		return ceMobile;
	}
	public void setCeMobile(String ceMobile) {
		this.ceMobile = ceMobile;
	}
	public String getCeRoleId() {
		return ceRoleId;
	}
	public void setCeRoleId(String ceRoleId) {
		this.ceRoleId = ceRoleId;
	}
	public String getPerEmpId() {
		return perEmpId;
	}
	public void setPerEmpId(String perEmpId) {
		this.perEmpId = perEmpId;
	}
	public String[] getPerCountryId() {
		return perCountryId;
	}
	public void setPerCountryId(String[] perCountryId) {
		this.perCountryId = perCountryId;
	}
	public String getPerGenderId() {
		return perGenderId;
	}
	public void setPerGenderId(String perGenderId) {
		this.perGenderId = perGenderId;
	}
	public String getPerMobile() {
		return perMobile;
	}
	public void setPerMobile(String perMobile) {
		this.perMobile = perMobile;
	}
	public String getEdHscPer() {
		return edHscPer;
	}
	public void setEdHscPer(String edHscPer) {
		this.edHscPer = edHscPer;
	}
	public String getEdSscPer() {
		return edSscPer;
	}
	public void setEdSscPer(String edSscPer) {
		this.edSscPer = edSscPer;
	}
	public String getEdDegreePer() {
		return edDegreePer;
	}
	public void setEdDegreePer(String edDegreePer) {
		this.edDegreePer = edDegreePer;
	}
	public String getEdDegree() {
		return edDegree;
	}
	public void setEdDegree(String edDegree) {
		this.edDegree = edDegree;
	}
	public String getProfTotExp() {
		return profTotExp;
	}
	public void setProfTotExp(String profTotExp) {
		this.profTotExp = profTotExp;
	}
	public String getProfExpCurrComp() {
		return profExpCurrComp;
	}
	public void setProfExpCurrComp(String profExpCurrComp) {
		this.profExpCurrComp = profExpCurrComp;
	}
	public String getProfCurrComp() {
		return profCurrComp;
	}
	public void setProfCurrComp(String profCurrComp) {
		this.profCurrComp = profCurrComp;
	}
	@Override
	public String toString() {
		return "EmpDetails [perEmpId=" + perEmpId + ", perCountryId=" + Arrays.toString(perCountryId) + ", perGenderId="
				+ perGenderId + ", perMobile=" + perMobile + ", edHscPer=" + edHscPer + ", edSscPer=" + edSscPer
				+ ", edDegreePer=" + edDegreePer + ", edDegree=" + edDegree + ", profTotExp=" + profTotExp
				+ ", profExpCurrComp=" + profExpCurrComp + ", profCurrComp=" + profCurrComp + ", ceCountryId="
				+ ceCountryId + ", ceEadd=" + ceEadd + ", ceEmpId=" + ceEmpId + ", ceEsn=" + ceEsn + ", ceGenderId="
				+ ceGenderId + ", ceMobile=" + ceMobile + ", ceRoleId=" + ceRoleId + "]";
	}
	
	
}
