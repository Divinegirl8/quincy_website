import Layouts from "../components/Layouts";

import About from "../features/About";
import Books from "../features/Books";
import Blog from "../features/Blog";

export const Routes = [

    {
        path : "",
        element: <Layouts/>,
        children : [
            {
                path: "/",
                element: <Blog/>
            },
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