import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface FileNode {
  title: string;
  absolutePath:string;
  children?: FileNode[];
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

  getFileHierarchy(resourcePath){
    console.log("get File Hierarchy");
    return this.httpClient.get<FileNode[]>(resourcePath);
  }
}