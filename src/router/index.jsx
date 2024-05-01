import Layouts from "../components/Layouts";

import About from "../features/About";
import Books from "../features/Books";

export const Routes = [
    {
        path : "/",
        element: <Layouts/>,
        children : [
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/books",
                element: <Books/>
            }
        ]
    }
]