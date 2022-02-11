import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  statusOptions:string[] = [
    'In Progress',
     'Complete',
     'In Complete'
  ]; 
 
  constructor() { }

  ngOnInit(): void {

    
  }

}
