import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../Pages/Home';
// import { PrivateRoute } from '../Components/PrivateRoutes';


export const Routes = () => {
    return useRoutes([
        {
          path: '/',
          element: < Home />
        }
    ]);
};
