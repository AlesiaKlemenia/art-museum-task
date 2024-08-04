import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import paths from "@/constants/paths";

const ErrorBoundary = lazy(() => import("@components/ErrorBoundary"));
const Home = lazy(() => import("@/pages/Home"));

const router = createBrowserRouter([
  {
    path: paths.home,
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
]);

export default router;
