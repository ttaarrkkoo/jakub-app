export interface User {
    id: number;
    name: string;
    password: string;
    email: string;
}

export interface Movie {
title: string;
year: string;
released: string;
plot: string;
}

export interface LoginDto {
   email: string;
   password: string;
   name: string;
}

export const USERS: User[] = [
    {
        id: 1,
        name: 'Dzoni',
        password: 'dzoni',
        email: 'dzoni@gmail.com'
    },

    {
        id: 2,
        name: 'Jakub',
        password: 'jaksa',
        email: 'jaksa@gmail.com'
    },
]