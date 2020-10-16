export interface User {
    id: number;
    name: string;
    password: string;
    email: string;
}

export interface LoginDto {
   email: string;
   password: string;
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