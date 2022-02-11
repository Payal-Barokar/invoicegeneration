import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-details',
  templateUrl: './files-details.component.html',
  styleUrls: ['./files-details.component.css']
})
export class FilesDetailsComponent implements OnInit {

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
