import React from 'react';
import ReactDOM from'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Series from './Pages/Series/Series';
import Movies from './Pages/Movies/Movies';
import ErrorScreen from './Pages/PageNotFound/Error';

const App = () =>{
    
        const router = createBrowserRouter([
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/series",
                element: <Series />
            },
            {
                path: "/movies",
                element: <Movies />
            },
            {
                path: '*',
                element: <ErrorScreen errorMessage='Page not found' />,
            },
        ])
       
        return (
            <div>            
                <RouterProvider router={router} />
            </div>
        );
      
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);   

