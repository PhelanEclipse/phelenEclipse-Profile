import { lazy } from "react";

const Landing = lazy(() => import("@/pages/landing"));
const NotFound = lazy(() => import("@/pages/notFound"));

export const Page = {
  Landing,
  NotFound
};
