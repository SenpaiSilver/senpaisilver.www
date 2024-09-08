import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import "./index.scss";
import Playground from "./Playground";
import Clipping from "./Clipping";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<App />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/clipping" element={<Clipping />} />
                        <Route path="/playground" element={<Playground />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
);
