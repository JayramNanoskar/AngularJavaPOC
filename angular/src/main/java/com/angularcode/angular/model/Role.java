package com.angularcode.angular.model;

public class Role
{
    private int id;
    private String viewValue;
    
    public Role(int id, String value)
    {
        super();
        this.id = id;
        this.viewValue = value;
    }

    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

    public String getValue()
    {
        return viewValue;
    }

    public void setValue(String value)
    {
        this.viewValue = value;
    }

    @Override
    public String toString()
    {
        return "Role [id=" + id + ", value=" + viewValue + "]";
    }
    
    
}
