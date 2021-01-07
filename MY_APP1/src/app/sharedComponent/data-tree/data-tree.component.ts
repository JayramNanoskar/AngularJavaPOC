import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { HttpClientService, FileNode } from '../http-client.service';

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  absolutePath:string;
}
@Component({
  selector: 'app-data-tree',
  templateUrl: './data-tree.component.html',
  styleUrls: ['./data-tree.component.css']
})
export class DataTreeComponent implements OnInit {

  @Input() jsonURL;
  @Output() sendNodeDataToParent = new EventEmitter<any>();
  @Output() sendLeafDataToParent = new EventEmitter<any>();

  panelOpenState = false;
  private _transformer = (node: FileNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.title,
      level: level,
      absolutePath: node.absolutePath
    };
  }
  constructor(private dataService:HttpClientService){}
  
  ngOnInit(){
    this.dataService.getFileHierarchy(this.jsonURL).subscribe(res=>{
      console.log(res);

     // let obj: FileNode = JSON.parse("{title:'temp', path:'D:\\temp', isLeaf:false, link:'link', children:[{title:'Level0', path:'D:\\temp\\Level0', isLeaf:false, link:'link', children:[{title:'level0_1.txt', path:'D:\\temp\\Level0\\level0_1.txt', isLeaf:true, link:'link', children:[]}, {title:'level0_2.rtf', path:'D:\\temp\\Level0\\level0_2.rtf', isLeaf:true, link:'link', children:[]}, {title:'level1', path:'D:\\temp\\Level0\\level1', isLeaf:false, link:'link', children:[{title:'level1_1.txt', path:'D:\\temp\\Level0\\level1\\level1_1.txt', isLeaf:true, link:'link', children:[]}, {title:'level1_2.rtf', path:'D:\\temp\\Level0\\level1\\level1_2.rtf', isLeaf:true, link:'link', children:[]}]}]}]}");

      //this.dataSource.data = <FileNode>obj;
    this.dataSource.data = res;

    })
  }
  
  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  logNode(data) {
    console.log("Parent Node :: "+data);
    this.sendNodeDataToParent.emit(data);
  }

  logChildNode(data) {
    console.log("Child Node :: "+data);
    this.sendLeafDataToParent.emit(data);
  }
/*{title:'loading_issues_fix', path:'D:\RULIS\loading_issues_fix', isLeaf:false, link:'link', children:[{title:'demo', path:'D:\RULIS\loading_issues_fix\demo', isLeaf:false, link:'link', children:[{title:'AddIndicatorMetadata.html', path:'D:\RULIS\loading_issues_fix\demo\AddIndicatorMetadata.html', isLeaf:true, link:'link', children:[]}, {title:'assets', path:'D:\RULIS\loading_issues_fix\demo\assets', isLeaf:false, link:'link', children:[{title:'css', path:'D:\RULIS\loading_issues_fix\demo\assets\css', isLeaf:false, link:'link', children:[{title:'bootstrap.min.css', path:'D:\RULIS\loading_issues_fix\demo\assets\css\bootstrap.min.css', isLeaf:true, link:'link', children:[]}, {title:'required.css', path:'D:\RULIS\loading_issues_fix\demo\assets\css\required.css', isLeaf:true, link:'link', children:[]}]}, {title:'images', path:'D:\RULIS\loading_issues_fix\demo\assets\images', isLeaf:false, link:'link', children:[{title:'csv.png', path:'D:\RULIS\loading_issues_fix\demo\assets\images\csv.png', isLeaf:true, link:'link', children:[]}, {title:'facebook.svg', path:'D:\RULIS\loading_issues_fix\demo\assets\images\facebook.svg', isLeaf:true, link:'link', children:[]}, {title:'FAO-logo-white.png', path:'D:\RULIS\loading_issues_fix\demo\assets\images\FAO-logo-white.png', isLeaf:true, link:'link', children:[]}, {title:'FAO-logo.png', path:'D:\RULIS\loading_issues_fix\demo\assets\images\FAO-logo.png', isLeaf:true, link:'link', children:[]}, {title:'fao-logo.svg', path:'D:\RULIS\loading_issues_fix\demo\assets\images\fao-logo.svg', isLeaf:true, link:'link', children:[]}, {title:'twitter.svg', path:'D:\RULIS\loading_issues_fix\demo\assets\images\twitter.svg', isLeaf:true, link:'link', children:[]}, {title:'xls.png', path:'D:\RULIS\loading_issues_fix\demo\assets\images\xls.png', isLeaf:true, link:'link', children:[]}, {title:'youtube.svg', path:'D:\RULIS\loading_issues_fix\demo\assets\images\youtube.svg', isLeaf:true, link:'link', children:[]}]}]}, {title:'Country.html', path:'D:\RULIS\loading_issues_fix\demo\Country.html', isLeaf:true, link:'link', children:[]}, {title:'customIndicator.html', path:'D:\RULIS\loading_issues_fix\demo\customIndicator.html', isLeaf:true, link:'link', children:[]}, {title:'Indicator.html', path:'D:\RULIS\loading_issues_fix\demo\Indicator.html', isLeaf:true, link:'link', children:[]}, {title:'IndicatorAdmin.html', path:'D:\RULIS\loading_issues_fix\demo\IndicatorAdmin.html', isLeaf:true, link:'link', children:[]}, {title:'IndicatorMetadata.html', path:'D:\RULIS\loading_issues_fix\demo\IndicatorMetadata.html', isLeaf:true, link:'link', children:[]}, {title:'IndicatorMetadataPublic.html', path:'D:\RULIS\loading_issues_fix\demo\IndicatorMetadataPublic.html', isLeaf:true, link:'link', children:[]}, {title:'indicator_bulkdownload.html', path:'D:\RULIS\loading_issues_fix\demo\indicator_bulkdownload.html', isLeaf:true, link:'link', children:[]}, {title:'ListVariableMetadata.html', path:'D:\RULIS\loading_issues_fix\demo\ListVariableMetadata.html', isLeaf:true, link:'link', children:[]}, {title:'new_customIndicator.html', path:'D:\RULIS\loading_issues_fix\demo\new_customIndicator.html', isLeaf:true, link:'link', children:[]}, {title:'surveydocumentation_bulkdownload.html', path:'D:\RULIS\loading_issues_fix\demo\surveydocumentation_bulkdownload.html', isLeaf:true, link:'link', children:[]}, {title:'VariableAdmin.html', path:'D:\RULIS\loading_issues_fix\demo\VariableAdmin.html', isLeaf:true, link:'link', children:[]}, {title:'variable_bulkdownload.html', path:'D:\RULIS\loading_issues_fix\demo\variable_bulkdownload.html', isLeaf:true, link:'link', children:[]}, {title:'WorldMap.html', path:'D:\RULIS\loading_issues_fix\demo\WorldMap.html', isLeaf:true, link:'link', children:[]}, {title:'WorldMapOpen.html', path:'D:\RULIS\loading_issues_fix\demo\WorldMapOpen.html', isLeaf:true, link:'link', children:[]}]}, {title:'publicdemo', path:'D:\RULIS\loading_issues_fix\publicdemo', isLeaf:false, link:'link', children:[{title:'assets', path:'D:\RULIS\loading_issues_fix\publicdemo\assets', isLeaf:false, link:'link', children:[{title:'css', path:'D:\RULIS\loading_issues_fix\publicdemo\assets\css', isLeaf:false, link:'link', children:[{title:'bootstrap.min.css', path:'D:\RULIS\loading_issues_fix\publicdemo\assets\css\bootstrap.min.css', isLeaf:true, link:'link', children:[]}, {title:'required.css', path:'D:\RULIS\loading_issues_fix\publicdemo\assets\css\required.css', isLeaf:true, link:'link', children:[]}]}, {title:'images', path:'D:\RULIS\loading_issues_fix\publicdemo\assets\images', isLeaf:false, link:'link', children:[{title:'csv.png', path:'D:\RULIS\loading_issues_fix\publicdemo\assets\images\csv.png', isLeaf:true, link:'link', children:[]}, {title:'facebook.svg', path:'D:\RULIS\loading_issues_fix\publicdemo\assets\images\facebook.svg', isLeaf:true, link:'link', children:[]}, {title:'FAO-logo-white.png', path:'D:\RULIS\loading_issues_fix\publicdemo\assets\images\FAO-logo-white.png', isLeaf:true, link:'link', children:[]}, {title:'FAO-logo.png', path:'D:\RULIS\loading_issues_fix\publicdemo\assets\images\FAO-logo.png', isLeaf:true, link:'link', children:[]}, {title:'fao-logo.svg', path:'D:\RULIS\loading_issues_fix\publicdemo\assets\images\fao-logo.svg', isLeaf:true, link:'link', children:[]}, {title:'twitter.svg', path:'D:\RULIS\loading_issues_fix\publicdemo\assets\images\twitter.svg', isLeaf:true, link:'link', children:[]}, {title:'xls.png', path:'D:\RULIS\loading_issues_fix\publicdemo\assets\images\xls.png', isLeaf:true, link:'link', children:[]}, {title:'youtube.svg', path:'D:\RULIS\loading_issues_fix\publicdemo\assets\images\youtube.svg', isLeaf:true, link:'link', children:[]}]}]}, {title:'Country.html', path:'D:\RULIS\loading_issues_fix\publicdemo\Country.html', isLeaf:true, link:'link', children:[]}, {title:'customIndicator.html', path:'D:\RULIS\loading_issues_fix\publicdemo\customIndicator.html', isLeaf:true, link:'link', children:[]}, {title:'Indicator.html', path:'D:\RULIS\loading_issues_fix\publicdemo\Indicator.html', isLeaf:true, link:'link', children:[]}, {title:'IndicatorMetadata.html', path:'D:\RULIS\loading_issues_fix\publicdemo\IndicatorMetadata.html', isLeaf:true, link:'link', children:[]}, {title:'IndicatorMetadataPublic.html', path:'D:\RULIS\loading_issues_fix\publicdemo\IndicatorMetadataPublic.html', isLeaf:true, link:'link', children:[]}, {title:'indicator_bulkdownload.html', path:'D:\RULIS\loading_issues_fix\publicdemo\indicator_bulkdownload.html', isLeaf:true, link:'link', children:[]}, {title:'new_customIndicator.html', path:'D:\RULIS\loading_issues_fix\publicdemo\new_customIndicator.html', isLeaf:true, link:'link', children:[]}, {title:'surveydocumentation_bulkdownload.html', path:'D:\RULIS\loading_issues_fix\publicdemo\surveydocumentation_bulkdownload.html', isLeaf:true, link:'link', children:[]}, {title:'variable_bulkdownload.html', path:'D:\RULIS\loading_issues_fix\publicdemo\variable_bulkdownload.html', isLeaf:true, link:'link', children:[]}, {title:'WorldMap.html', path:'D:\RULIS\loading_issues_fix\publicdemo\WorldMap.html', isLeaf:true, link:'link', children:[]}, {title:'WorldMapOpen.html', path:'D:\RULIS\loading_issues_fix\publicdemo\WorldMapOpen.html', isLeaf:true, link:'link', children:[]}]}]} */
}
