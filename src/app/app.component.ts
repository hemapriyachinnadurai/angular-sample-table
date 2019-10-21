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
  
}
