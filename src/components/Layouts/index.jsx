import NavBar from "../reusables/NavBar";
import {Outlet} from "react-router-dom";
import Footer from "../reusables/Footer";

const Layouts = () =>{
    return(
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>

        </>
    )
}
export default Layouts;