import React from "react";
import "./index.css";
import Home from "./pages/Home";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="search" element={<SearchPage/>}/>
  </Route>
))

const App = () => {
  return (
   <RouterProvider router={router}/>
  );
};

export default App;
