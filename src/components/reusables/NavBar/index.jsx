import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle, faInstagram, faSearchengin, faTiktok} from "@fortawesome/free-brands-svg-icons";
import style from "./index.module.css"
import {useState} from "react";


const NavBar = () => {
    const  [isActive, setIsActive] = useState(false);

    const toggle = () =>{
        setIsActive(!isActive);
    }


    return(
        <>
            <div className={style.mainCont}>
                <div className={style.logo}>
                    <h1>QUINCY TOBENNA ALAGBU</h1>
                </div>

                <div className={style.childCont}>
                    <button className={`${style.hamburger} ${isActive ? 'active':''}`} onClick={toggle}>
                        <div className={style.bar}></div>

                    </button>
                    <span style={{color:"red"}}>BLOG</span>
                    <span>BOOKS</span>
                    <span>ABOUT</span>
                    <span>CONTACT</span>
                    <div className={style.ico}>
                        <FontAwesomeIcon icon={faInstagram}/>
                        <FontAwesomeIcon icon={faTiktok}/>
                        <FontAwesomeIcon icon={faGoogle}/>

                    </div>
                </div>

                <div className={style.frm}>
                    <form>
                        <input type={"text"} placeholder={"search this website"}/>
                        <button className={style.btn}>
                            <FontAwesomeIcon icon={faSearchengin}/>
                        </button>

                    </form>

                </div>


            </div>
        </>
    )
}
//npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons

export default NavBar;