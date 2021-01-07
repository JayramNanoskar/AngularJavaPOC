package com.angularcode.angular.model;


public class InvInfoDTO {

	private String ssn1;
	private String ssn2;
	public String getSsn1() {
		return ssn1;
	}
	public void setSsn1(String ssn1) {
		this.ssn1 = ssn1;
	}
	public String getSsn2() {
		return ssn2;
	}
	public void setSsn2(String ssn2) {
		this.ssn2 = ssn2;
	}
	@Override
	public String toString() {
		return "InvInfoDTO [ssn1=" + ssn1 + ", ssn2=" + ssn2 + "]";
	}
	
	
}
