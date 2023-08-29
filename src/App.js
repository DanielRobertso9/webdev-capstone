import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homescreen from './components/Home/Homescreen';
import RootLayout from './components/Elements/Root';
import RecipeScreen from './components/Recipes/RecipeScreen';
import CalendarScreen from './components/Calendar/CalendarScreen';
import GroceryListScreen from './components/GroceryList/GroceryListScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Homescreen /> },
      { path: "recipe/:id", element: <RecipeScreen />},
      { path: "calendar", element: <CalendarScreen />},
      { path: "grocerylist", element: <GroceryListScreen />},
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}


export default App;
