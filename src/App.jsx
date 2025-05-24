import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Home from "./Home/Home";
import SwiggyRoutes from "./Home/Swiggy";
import OlaRoutes from "./Home/Ola";
import Error from "./components/Error";

export const AppLayout = () => (
  <Provider store={appStore}>
    <div className="app">
      <Outlet />
    </div>
  </Provider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      ...SwiggyRoutes,
      ...OlaRoutes,
    ],
    errorElement: <Error />,
  },
]);

const App = () => <RouterProvider router={appRouter} />;

export default App;
