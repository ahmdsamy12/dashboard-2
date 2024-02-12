import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./layout/Layout";
import Trading from "./pages/Trading";
import Alert from "./pages/Alert";
import Automattion from "./pages/Automattion";
import Portofolio from "./pages/Portofolio";
import Training from "./pages/Training";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/auto" element={<Automattion />} />
      <Route path="/porto" element={<Portofolio />} />
      <Route path="/train" element={<Training />} />
      <Route path="/trad" element={<Trading />}/>
      <Route path="/alert" element={<Alert />}/>
    </Route>
  )
);

const App = () => {
  return (
    <>
    <RouterProvider router={router} />

    </>
  )
}

export default App