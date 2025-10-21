/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import "./index.css";

import * as React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Auth from "./Auth.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Stocks from "./pages/Stocks.jsx";
import Orders from "./pages/Orders.jsx";
import Settings from "./pages/Settings.jsx";

const router = createHashRouter([
  { path: "/", element: <Auth /> },
  {
    path: "/home",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "stocks", element: <Stocks /> },
      { path: "orders", element: <Orders /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

const root = createRoot(document.body);
root.render(<RouterProvider router={router} />);

console.log(
  '👋 This message is being logged by "renderer.js", included via webpack'
);
