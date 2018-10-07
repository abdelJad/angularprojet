import { Injectable } from '@angular/core';
import { listClient } from './fackClients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
 private clients = listClient;

 public getCliens() {
  console.log(this.clients.length);
  return this.clients;
   }
}
