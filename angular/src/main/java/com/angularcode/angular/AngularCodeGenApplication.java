package com.angularcode.angular;

import java.io.File;
import java.io.FileWriter;
import java.io.Writer;

import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;
import org.apache.velocity.runtime.RuntimeConstants;
import org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.angularcode.angular.service.FileViewerService;
import com.angularcode.angular.serviceImpl.FileViewerServiceImpl;

@SpringBootApplication
public class AngularCodeGenApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(AngularCodeGenApplication.class, args);
	}
	
	@Bean
    public FileViewerService getFileViewerService(){
        return  new FileViewerServiceImpl();
			
    }

	@Override
	 public void run(String... arg0) throws Exception {
//        Velocity.setProperty(RuntimeConstants.RESOURCE_LOADER, "classpath");
//        Velocity.setProperty("classpath.resource.loader.class", ClasspathResourceLoader.class.getName());
//         
//        Velocity.init();
//        /*  create a context and add data */
//        VelocityContext context = new VelocityContext();
//        context.put("title", "User Page");
//        context.put("name", "John Doe");
// 
//        Writer writer = new FileWriter (new File("C:/output/hello-velocity.html"));
//         
//        Velocity.mergeTemplate("/templates/htmlTemplate.vm", "UTF-8", context, writer);
//        writer.flush();
//        writer.close();
    }

}
