import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import paths from "@/constants/paths";

const ErrorBoundary = lazy(() => import("@components/ErrorBoundary"));
const Home = lazy(() => import("@/pages/Home"));
const DetailInfo = lazy(() => import("@/pages/DetailInfo"));

const router = createBrowserRouter([
  {
    path: paths.home,
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: paths.detail.info.route,
    element: <DetailInfo />,
    errorElement: <ErrorBoundary />,
  },
]);

export default router;
