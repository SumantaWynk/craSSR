import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import UserListComponent, { loadData } from './components/UserListComponent';


export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        loadData,
        path: '/users',
        component: UserListComponent
    }
]