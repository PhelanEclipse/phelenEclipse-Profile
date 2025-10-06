import ThemeColor from "@/components/themes/color";
import { Config } from "@/configs";
import { Page } from "@/pages";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: Config.Path.None.url,
    element: <ThemeColor />,
    children: [
      {
        path: Config.Path.None.url,
        element: <Page.Landing />,
      },
    ],
  },
  {
    path: "*",
    element: <Page.NotFound />,
  },
]);

export default router;
