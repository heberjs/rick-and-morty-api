

import paths from "./paths/paths"
import App from "../App"
import Home from "../Pages/Home"
import CharacterDetails from "../Pages/CharacterDetails"
import { createBrowserRouter, Navigate } from "react-router-dom"



const routes = [

    {
        path: paths.app,
        element: <App />,
        children: [
            {
                index: true,
                element: <Navigate to={paths.home} replace />
            },
            {
                path: paths.home,
                element: <Home />
            },
            {
                path: paths.characterDetails,
                element: <CharacterDetails />
            }
        ]
    }
]

const appRouter = createBrowserRouter(routes)

export default appRouter