package com.angularcode.angular.model;



public class TabParent {
	String parent;

	public String getParent() {
		return parent;
	}

	public void setParent(String parent) {
		this.parent = parent;
	}

	public TabParent(String parent) {
		super();
		this.parent = parent;
	}

	@Override
	public String toString() {
		return "TabParent [parent=" + parent + "]";
	}

}
