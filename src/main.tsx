import React from "react";
import ReactDOM from "react-dom/client";
//正确的样式引入顺序
// 初始化样式一般放在最前面 npm i reset-css
import "reset-css";

// ui 框架的样式

// 全局样式
import "@/assets/style/global.scss";
// 组件的样式

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
// import Router from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>严格模式下组件会执行2次
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);
