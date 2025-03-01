import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/project/:id",
    element: <Project />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
