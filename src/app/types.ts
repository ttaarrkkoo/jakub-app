export interface User {
    id: number;
    name: string;
    password: string;
    email: string;
    role?: Role;
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
}

export const USERS: User[] = [
    {
        id: 1,
        name: 'Dzoni',
        password: 'dzoni',
        email: 'dzoni@gmail.com',
        role: Role.Admin
    },

    {
        id: 2,
        name: 'Jakub',
        password: 'jaksa',
        email: 'jaksa@gmail.com'
    },
]