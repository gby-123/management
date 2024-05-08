// 组件形式写法
import App from "../App";
import Home from "../views/Home";
import About from "../views/About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//两种路由模式的组件 ： BrowserRouter(history模式) HashRouter(hash模式)

// const baseRouter = () => {
//这里写逻辑 用return ,没有就可以省略
//   return ( <BrowserRouter>
//     <Routes>
//     <Route path="/" element={<App />}></Route>
//     <Route path="/home" element={<Home />}></Route>
//     <Route path="/about" element={<About />}></Route>
//   </Routes>
// </BrowserRouter>;)
// }
//以上写法可以简写为：
const baseRouter = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>;
};

export default baseRouter;
