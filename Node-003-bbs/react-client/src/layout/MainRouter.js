import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BBsMain from "../comps/BBsMain";

const MainRouter = () => {
  const router = createBrowserRouter([
    { path: "/", element: <App/>, childern : [
        {path: ""}
        { path: "/notice", element: <h1>공지사항이요</h1> },
        { path: "/bbs", element: <BBsMain /> },
    ],
  ]);
  return <RouterProvider router={{ router }} />;
};
export default MainRouter;
