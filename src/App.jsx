
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import JobsPage from "./Pages/JobsPage";

const router = createBrowserRouter(

  createRoutesFromElements(
  <Route path= '/' element = {<MainLayout/>}>
    <Route index element= {<HomePage/>} />)
    <Route path = '/jobs' element= {<JobsPage/>} />
    <Route path = '/add-job' element= {<JobsPage/>} />
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
