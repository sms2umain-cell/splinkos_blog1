
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("../pages/home/page"));
const AboutPage = lazy(() => import("../pages/about/page"));
const BlogPage = lazy(() => import("../pages/blog/page"));
const ArticlePage = lazy(() => import("../pages/article/page"));
const ContactPage = lazy(() => import("../pages/contact/page"));
const TermsPage = lazy(() => import("../pages/terms/page"));
const PrivacyPage = lazy(() => import("../pages/privacy/page"));
const ResponsibleGamingPage = lazy(() => import("../pages/responsible-gaming/page"));
const GamesPage = lazy(() => import("../pages/games/page"));
const NotFound = lazy(() => import("../pages/NotFound"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/article/:id",
    element: <ArticlePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/terms",
    element: <TermsPage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
  },
  {
    path: "/responsible-gaming",
    element: <ResponsibleGamingPage />,
  },
  {
    path: "/games",
    element: <GamesPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
