import Layout from "./layout/Layout";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route, RouterProvider
} from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  //  creating route
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  );
}

export default App;
