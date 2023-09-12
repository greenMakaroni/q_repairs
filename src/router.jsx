// pages
import Home from "./pages/Home"
import Contact from "./pages/Contact"

import Error from "./pages/Error"

// router
import { 
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },
])

export default router