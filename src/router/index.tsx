import React, { lazy } from "react";
import Home from "../views/Home";
// import About from "../views/About";
// import User from "@/views/User";
// const About = lazy(() => import("../views/About"));
// const User = lazy(() => import("../views/User"));
const Page1 = lazy(() => import("../views/Page1"));
const Page2 = lazy(() => import("../views/Page2"));
const Page301 = lazy(() => import("../views/Page301"));
const Page302 = lazy(() => import("../views/Page302"));
const NotDefined = lazy(() => import("../views/404"));
// Navigate 重定向组件
import { Navigate } from "react-router-dom";

//懒加载的模式的组件的写法，外面需要套一层Loading的提示加载组件

const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>
);

const routes = [
  //嵌套路由 开始=====
  {
    path: "/",
    element: <Navigate to="/page1" />
  },
  { path: "/404", element: withLoadingComponent(<NotDefined />) },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/page1",
        element: withLoadingComponent(<Page1 />)
      },
      {
        path: "/page2",
        element: withLoadingComponent(<Page2 />)
      },
      {
        path: "/page3/page301",
        element: withLoadingComponent(<Page301 />)
      },
      {
        path: "/page3/page302",
        element: withLoadingComponent(<Page302 />)
      }
    ]
  },
  //嵌套路由 结束=====
  //访问其余路径的时候直接跳到404
  {
    path: "*",
    element: <Navigate to="/404" />
  }

  // {
  //   path: "/home",
  //   element: <Home />
  // },
  // {
  //   path: "/about",
  //   element: withLoadingComponent(<About />)
  // },
  // {
  //   path: "/user",
  //   element:  withLoadingComponent(<User />)
  // }
];

export default routes;
