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
    element: (
      <>
        <Navbar />
        <Announcements />
        <Footer />
      </>
    ),
  },
  {
    path: "connect",
    element: (
      <>
        <Navbar />
        <Connect />
        <Footer />
      </>
    ),
  },
  {
    path: "coordinators",
    element: (
      <>
        <Navbar />
        <Coordinators />
        <Footer />
      </>
    ),
  },
  {
    path: "events",
    element: (
      <>
        <Navbar />
        <Events />
        <Footer />
      </>
    ),
  },
  {
    path: "feedback",
    element: (
      <>
        <Navbar />
        <Feedback />
        <Footer />
      </>
    ),
  },
  {
    path: "pod",
    element: (
      <>
        <Navbar />
        <POD />
        <Footer />
      </>
    ),
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
