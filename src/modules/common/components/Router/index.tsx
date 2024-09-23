import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import App from "../../../../App.js"
import CreationalPatterns from "../../../creational-patterns/index.tsx"
import StructuralPatterns from "../../../structural-patterns/index.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/creationals",
    element: <CreationalPatterns />,
  },
  {
    path: "/structurals",
    element: <StructuralPatterns />,
  },
])

const RouterComponent = () => {
  return <RouterProvider router={router} />
}

export default RouterComponent
