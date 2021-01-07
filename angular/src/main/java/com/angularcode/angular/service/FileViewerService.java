package com.angularcode.angular.service;

import org.springframework.stereotype.Service;

import com.angularcode.angular.model.FileStructure;


@Service
public interface FileViewerService {
	
	public FileStructure getFileStructure(String rootDirectoryPath);

}
