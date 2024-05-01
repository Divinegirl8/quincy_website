import Layouts from "../components/Layouts";

import About from "../features/About";

export const Routes = [
    {
        path : "/",
        element: <Layouts/>,
        children : [
            {
                path: "/about",
                element: <About/>,
            }
        ]
    }
]