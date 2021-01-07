package com.angularcode.angular.model;

public class Employee
{
    private int id;
    private String name;
    private String gender;
    private String role;
    
    public Employee()
    {
    }

    public Employee(int id, String name, String gender, String role)
    {
        super();
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.role = role;
    }
    
    public int getId()
    {
        return id;
    }
    public void setId(int id)
    {
        this.id = id;
    }
    public String getName()
    {
        return name;
    }
    public void setName(String name)
    {
        this.name = name;
    }
    public String getGender()
    {
        return gender;
    }
    public void setGender(String gender)
    {
        this.gender = gender;
    }
    public String getRole()
    {
        return role;
    }
    public void setRole(String string)
    {
        this.role = string;
    }
    @Override
    public String toString()
    {
        return "Employee [id=" + id + ", name=" + name + ", gender=" + gender + ", role=" + role
            + "]";
    }
   
}
