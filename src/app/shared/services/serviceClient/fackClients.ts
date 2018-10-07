import { Client } from '../../models/client';

export const listClient: Client [] = [
new Client({
            id:  1,
            nom: 'Dupont',
            prenom: 'Eric',
            adresse: '3 route de la gare',
            age: 24
           }),
    new Client({
            id:  2,
            nom: 'Martin',
            prenom: 'Michel',
            adresse: '15 route de la gare',
            age: 29
    }),
    new Client({
            id:  3,
            nom: 'Dupont',
            prenom: 'Franck',
            adresse: '23 route de la gare',
            age: 32
    }),
    new Client({
          id:  4,
          nom: 'Martin',
          prenom: 'Lucas',
          adresse: '32 route de la gare',
          age: 21
        })
];
