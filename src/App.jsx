import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<h1>this is the index route</h1>}></Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
