import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Announcements from "./pages/Announcements.jsx";
import Connect from "./pages/Connect.jsx";
import Coordinators from "./pages/Coordinators.jsx";
import Events from "./pages/Events.jsx";
import Feedback from "./pages/Feedback.jsx";
import POD from "./pages/POD.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "announcement",
    element: <Announcements />,
  },
  {
    path: "connect",
    element: <Connect />,
  },
  {
    path: "coordinators",
    element: <Coordinators />,
  },
  {
    path: "events",
    element: <Events/>,
  },
  {
    path: "feedback",
    element: <Feedback />,
  },
  {
    path: "pod",
    element: <POD />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
