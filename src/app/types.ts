export interface User {
    id: number;
    name: string;
    password: string;
    email: string;
    role: Role;
    pol: Pol;
    datum: string;
    
}

export enum Pol {
 Musko = 'Musko',
 Zensko = 'Zensko'
}


export enum Role {
Admin = 'Adminstrator',
User = 'User'
}

export interface Movie {
Title: string;
Year: string;
Type: string;
Poster: string;
imdbID: string;
}

export interface LoginDto {
   email: string;
   password: string;
   name: string;
   role: Role;
   pol: Pol;
   datum: string;
}

export const USERS: User[] = [
    {
        id: 1,
        name: 'Dzoni',
        password: 'dzoni',
        email: 'dzoni@gmail.com',
        role: Role.Admin,
        pol: Pol.Musko,
        datum: '3/29/1999'
    },

    {
        id: 2,
        name: 'Jakub',
        password: 'jaksa',
        email: 'jaksa@gmail.com',
        pol: Pol.Musko,
        datum: '3/29/1999',
        role: Role.User

    },
]