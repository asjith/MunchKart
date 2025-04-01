import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import Shimmer from "./component/Shimmer";
import { useEffect } from "react";
import UserContext from "./utils/UserContext";
//import Grocery from "./component/Grocery";

const Grocery = lazy(() => import("./component/Grocery"));

const AppLayout = () => {
  //Dummy Authentication process - to learn react context
  const [userName, setUserName] = useState("");
  useEffect(() => {
    //passing username and password to API
    const dataReturn = {
      user: "Anusree S Jith",
    };
    setUserName(dataReturn.user);
  }, []);

  return (
    <UserContext.Provider value={{ loggedUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxElement);
root.render(<RouterProvider router={appRouter} />);
//root.render(<AppLayout />);
