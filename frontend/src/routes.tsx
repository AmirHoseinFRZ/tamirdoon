import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/signin", element: <SigninPage /> },
    ],
  },
]);

export default router;
