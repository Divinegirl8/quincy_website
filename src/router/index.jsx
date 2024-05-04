import Layouts from "../components/Layouts";

import About from "../features/About";
import Books from "../features/Books";
import Blog from "../features/Blog";
import Book1 from "../features/Book1";
import Book2 from "../features/Book2";

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
            },
            {
                path: "/bookView",
                element: <Book1/>
            },
            {
                path: "/book2",
                element: <Book2/>
            }
        ]
    }
]