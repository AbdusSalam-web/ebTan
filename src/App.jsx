import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import Home from './pages/Home.jsx';

function App() {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      </Route>
    </Route>
  ))
  return <>
  <RouterProvider router={myRoute} />
  </>;
}

export default App;
