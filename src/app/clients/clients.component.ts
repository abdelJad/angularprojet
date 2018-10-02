import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  private title:  string;
  constructor() {
    this.title = ' Angular in action fisrt version ';
   }

  ngOnInit() {
    console.log("test commit");
  }

}
