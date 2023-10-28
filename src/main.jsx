import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import { Github, Home } from "./components";
import { About } from "./components";
import {Contact} from "./components";
import {User} from "./components";
import { githubLoader } from "./components/Github/Github";


// 1st way

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       {path: "contact-us", element: <Contact/>}
//     ],
//   },
// ]);

// 2nd way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
          <Route path = '' element = {<Home/>}/>
          <Route path="about" element = {<About/>}/>
          <Route path="contact-us" element = {<Contact/>}/>
          <Route path=":id" element = {<User/>}/>
          <Route 
          loader={githubLoader}
          path="github"
          element= {<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
