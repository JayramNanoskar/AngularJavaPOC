package com.angularcode.angular.serviceImpl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.concurrent.ConcurrentLinkedDeque;
import java.util.stream.Collectors;

import com.angularcode.angular.model.Country;
import com.angularcode.angular.model.Employee;
import com.angularcode.angular.model.FileStructure;
import com.angularcode.angular.model.Menu;
import com.angularcode.angular.model.Role;
import com.angularcode.angular.model.Tab;
import com.angularcode.angular.model.TabParent;
import com.angularcode.angular.service.FileViewerService;
import com.google.gson.Gson;


public class FileViewerServiceImpl implements FileViewerService{

	@Override
	public FileStructure getFileStructure(String rootDirectoryPath) {
		//String directoryPath = "C:\\work\\Diebold\\Jira\\XrayUtility\\bugfix\\IAUTOM-1020_SessionFileLanguageIteration\\attachments\\xray-testcontrollersessionfile-1.0.0.35";
		try {
			FileStructure fileStructure = getFileStructures(rootDirectoryPath);
			System.out.println(fileStructure);
			return fileStructure;
		} catch (IOException e) {
			e.printStackTrace();
		}
		return new FileStructure();
	}

	
	
	public static FileStructure getFileStructures(String absolutepath) throws IOException{
		System.out.println(String.format("Processing: %s", absolutepath));
		FileStructure fileStructure = new FileStructure();
		Path path = Paths.get(absolutepath);
		if(path.toFile().isFile()) {
			fileStructure.setLeaf(true);
			fileStructure.setLink("link");
			fileStructure.setPath(absolutepath);
			fileStructure.setTitle(path.getFileName().toString());
			System.out.println(String.format("File: %s", path.getFileName()));
			return fileStructure;
		}
		
		List<Path> subfolders = Files.walk(path, 1)
	            .collect(Collectors.toList());
		subfolders.remove(0);
		subfolders.forEach(subfolder -> {
			System.out.println(String.format("Child Directory: %s", subfolder));
		});
		
		Deque<FileStructure> childNodes = new ConcurrentLinkedDeque<>();
		subfolders.forEach(subfolder -> {
			try {
				childNodes.add(getFileStructures(subfolder.toString()));
			} catch (IOException e) {
				e.printStackTrace();
			}
		});
		fileStructure.setLeaf(false);
		fileStructure.setLink("link");
		fileStructure.setPath(absolutepath);
		fileStructure.setTitle(path.getFileName().toString());
		fileStructure.setChildren(childNodes);
		return fileStructure;
	}
	
	public static String getAllCountries()
    {
        String[] countries = Locale.getISOCountries();
        ArrayList<Country> countryList = new ArrayList<Country>();
        
        for(String c : countries)
        {
            Locale obj = new Locale("", c);
            countryList.add(new Country(obj.getCountry(), obj.getDisplayCountry()));
        }
        
        Gson gson = new Gson();
        return gson.toJson(countryList);
    }
    public static String getEmpRoles()
    {
        ArrayList<Role> empRoles = new ArrayList<Role>();
        empRoles.add(new Role(1, "Deleloper"));
        empRoles.add(new Role(2, "Tester"));
        empRoles.add(new Role(3, "Manager"));
        empRoles.add(new Role(4, "Lead"));
        
        Gson gson = new Gson();
        return gson.toJson(empRoles);
    }
    
    public static String getEmployeesHeader()
    {
        HashMap<String, String> employeeHeader = new HashMap<String, String>();
        employeeHeader.put("id", "ID NO");
        employeeHeader.put("name", "Emp Name");
        employeeHeader.put("gender", "Gender");
        employeeHeader.put("role", "Role Assigned");
        
        Gson gson = new Gson();
        return gson.toJson(employeeHeader);
    }
    
    public static String getEmployees()
    {
        
        ArrayList<Employee> employees = new ArrayList<Employee>();
        employees.add(new Employee(1, "John", "Male" , "Tester"));
        employees.add(new Employee(2, "Vikas", "Male" , "Lead"));
        employees.add(new Employee(3, "Vishal", "Male" , "Lead"));
        employees.add(new Employee(4, "Manali", "Female" , "Tester"));
        employees.add(new Employee(5, "Linda", "Female" , "Tester"));
        Gson gson = new Gson();
        return gson.toJson(employees);
        
        /*
        List<Employee> empData = ResourceDao.getEmployeesData();
        Gson gson = new Gson();
        return gson.toJson(empData);
        */
    }
    
    /*public static String getEmpRole(int id)
    {
       
        ArrayList<String> roles = new ArrayList<String>();
        roles.add("Tester");
        roles.add("Developer");
        roles.add("Team Lead");
        roles.add("Architect");
        Gson gson = new Gson();
        return gson.toJson(roles);
        
        
        String role = ResourceDao.getEmpRoles(id);
        String[] roles = role.trim().split(",");
        Gson gson = new Gson();
        return gson.toJson(roles);
    }*/
	public static String getAllMenus() {
		/*ArrayList<Menu> menus = new ArrayList<Menu>();
		menus.add(new Menu("Group Queue Summary", "/groupQueueSummary", "",""));
		menus.add(new Menu("User Inbox", "/invtabs", "",""));
		menus.add(new Menu("Search Investigation", "/search", "",""));
		menus.add(new Menu("Create Investigation", "/create", "",""));
		menus.add(new Menu("Other Details", "/details", "",""));
		Gson gson = new Gson();
		System.out.println(gson.toJson(menus));	
		return gson.toJson(menus);*/
		ArrayList<Menu> menus = new ArrayList<Menu>();
		menus.add(new Menu("Employee Details", "/empDetails", "",""));
		menus.add(new Menu("Search Employee", "/searchEmp", "",""));
		menus.add(new Menu("Create Employee", "/createEmp", "",""));
		menus.add(new Menu("Other Details", "/otherDetails", "",""));
		
		Gson gson = new Gson();
		System.out.println(gson.toJson(menus));
        return gson.toJson(menus);  
	}



	public static Object getMainTabList() {
        ArrayList<Tab> tabs = new ArrayList<Tab>();
           /* tabs.add(new Tab("PersonalDetailComponent", "Personal", 
			new TabParent("PersonalDetailComponent")));
			            tabs.add(new Tab("EducationalDetailComponent", "Education", 
			new TabParent("EducationalDetailComponent")));
			            tabs.add(new Tab("EmploymentDetailComponent", 
			"Employement", new TabParent("EmploymentDetailComponent")));
			           */ tabs.add(new Tab("GeneralTabComponent", "General", new 
			TabParent("GeneralTabComponent")));
			           tabs.add(new Tab("DetailTabComponent", "Detail", new 
			TabParent("DetailTabComponent")));
			           tabs.add(new Tab("MEMOTabComponent", "MEMO", new 
			TabParent("MEMOTabComponent")));


            Gson gson = new Gson();
            System.out.println(gson.toJson(tabs));
            return gson.toJson(tabs);



    }

}
