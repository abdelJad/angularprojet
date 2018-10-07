import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  id: number;
  nom: string;
  prenom: string;
  adresse: string;
  age: number;


  constructor(fields?: Partial<Client>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

}
