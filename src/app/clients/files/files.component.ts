import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
 teamOptions:string[] = [
   'Abdul Kareem',
   'Maya Hensen',
   'Abdul Kareem',
   'Maya Hensen'
 ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
