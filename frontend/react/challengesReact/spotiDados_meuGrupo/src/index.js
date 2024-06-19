import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import Layout from "./components/pages/Layout";
import { AlbumPage } from "./components/pages/Top-albums.jsx";
import { TrackPage } from "./components/pages/Top-tracks.jsx";
import { ArtistPage100 } from "./components/pages/TopArtist.jsx";
import { ArtistaInfo } from "./components/pages/artistaRequisitos.jsx";
import { ArtistReq } from "./components/artistThings/artistReq.jsx";
import { CountThingsUser } from "./components/userThings/userReq.jsx";

const navigateTo = (path) => {
  route.navigate(path);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout navigateTo={navigateTo} />,
    children: [
      {
        path: "Home",
        element: <CountThingsUser />,
      },
      {
        path: "Albums",
        element: <AlbumPage />,
      },
      {
        path: "Músicas",
        element: <TrackPage />,
      },
      {
        path: "Artists",
        element: <ArtistPage100 navigateTo={navigateTo} />,
      },
      {
        path: ":artista",
        element: <ArtistReq />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

reportWebVitals();
