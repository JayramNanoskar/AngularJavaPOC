package com.angularcode.angular.model;


public class Tab
{
    private String componentName;
    private String title;
    private TabParent tabData;
    
    public Tab(String compName, String tabName, TabParent compParent)
    {
        super();
        this.componentName = compName;
        this.title = tabName;
        this.tabData = compParent;
    }

 

    public String getComp()
    {
        return componentName;
    }

 

    public void setComp(String comp)
    {
        this.componentName = comp;
    }

 

    public String getCompName()
    {
        return title;
    }

 

    public void setCompName(String compName)
    {
        this.title = compName;
    }

 

    public TabParent getCompParent()
    {
        return tabData;
    }

 

    public void setCompParent(TabParent compParent)
    {
        this.tabData = compParent;
    }

 

    @Override
    public String toString()
    {
        return "Tab [comp=" + componentName + ", compName=" + title + ", compParent=" + tabData + "]";
    }
    
    
}
