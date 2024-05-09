import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";
import DonatePage from "./pages/Donate/DonatePage";
import GalleryPage from "./pages/Gallery/GalleryPage";
import EventsPage from "./pages/Events/EventsPage";
import TeamPage from "./pages/Team/TeamPage";
import DocumentsPage from "./pages/Documents/DocumentsPage";
import BlogsPage from "./pages/Blogs/BlogsPage";
import RootLayout from "./pages/Root/RootLayout";
import ErrorPage from "./pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/blogs", element: <BlogsPage /> },
      { path: "/events", element: <EventsPage /> },
      { path: "/documents", element: <DocumentsPage /> },
      { path: "/team", element: <TeamPage /> },
      { path: "/gallery", element: <GalleryPage /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/donate", element: <DonatePage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
