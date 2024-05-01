import NavBar from "../reusables/NavBar";
import {Outlet} from "react-router-dom";
import Footer from "../reusables/Footer";

const Layouts = () =>{
    return(
        <>

            <Outlet/>
            <Footer/>

        </>
    )
}
export default Layouts;