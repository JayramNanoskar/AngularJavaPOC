package com.angularcode.angular.model;

public class Country
{
    private String id;
    private String viewValue;
    public Country(String id, String viewValue)
    {
        super();
        this.id = id;
        this.viewValue = viewValue;
    }
    @Override
    public String toString()
    {
        return "Country [id=" + id + ", viewValue=" + viewValue + "]";
    }
    public String getId()
    {
        return id;
    }
    public void setId(String id)
    {
        this.id = id;
    }
    public String getViewValue()
    {
        return viewValue;
    }
    public void setViewValue(String viewValue)
    {
        this.viewValue = viewValue;
    }
    
}
