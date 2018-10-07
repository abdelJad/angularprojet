import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/services/serviceClient/clientservice';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public listClient =  [] ;
  private title:  string;
  constructor(private clients: ClientService) {
    this.title = ' Angular in action fisrt version ';
   }

  ngOnInit() {
    console.log('ngOnInit() in ClientsComponent ');
    console.log( this.clients.getCliens());
    this.listClient = this.clients.getCliens();
  }

}
