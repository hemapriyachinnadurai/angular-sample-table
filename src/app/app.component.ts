import { Component, OnInit } from '@angular/core';
import { FileService } from './service/file.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name: [] ;
  constructor(private fileService:FileService){

  }

  ngOnInit() {
  this.fileService.getData().subscribe(res =>{this.name = res;
  console.log(res)} );
  }
  delete(id){
    console.log('id', id)
for(var i=0; i < this.name.length; i++){
  console.log('i',)
if(this.name[i].id === id){
  this.name.splice(i, 1);
  console.log(this.name.splice(i, 1))
}
}
  }
  
}
