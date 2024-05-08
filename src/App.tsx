// import { UpCircleOutlined } from "@ant-design/icons";
import "antd/dist/reset.css"; //全局 全部组件的样式都引入了
import { useRoutes, Link } from "react-router-dom";
import router from "./router";

function App() {
  // const [count, setCount] = useState(0);
  const outlet = useRoutes(router);

  return (
    <div className="App">
      {/* <Link to="/home">home</Link> | <Link to="/about">About</Link> | <Link to="/user">User</Link> */}
      {/* 占位符组件，类似于窗口，用来展示组件的，有点像vue的router-view */}
      {/* <Outlet></Outlet> */}
      {outlet}
    </div>
  );
}

export default App;
