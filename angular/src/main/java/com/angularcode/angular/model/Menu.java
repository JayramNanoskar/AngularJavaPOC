package com.angularcode.angular.model;

public class Menu
{
    private String name;
    private String url;
    private String icon;
    private String targetComp;
    
    public String getTargetComp() {
		return targetComp;
	}

	public void setTargetComp(String targetComp) {
		this.targetComp = targetComp;
	}

	public Menu()
    {
    }

    public Menu(String name, String url, String icon, String targetComponent)
    {
        super();
        this.name = name;
        this.url = url;
        this.icon = icon;
        this.targetComp = targetComponent;
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	@Override
	public String toString() {
		return "Menu [name=" + name + ", url=" + url + ", icon=" + icon + "]";
	}
    

}
