import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle, faInstagram, faSearchengin, faTiktok} from "@fortawesome/free-brands-svg-icons";
import style from "./index.module.css"
import {useState} from "react";
import {Link} from "react-router-dom";


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

                <button className={`${style.hamburger} ${isActive ? style.active : ''}`} onClick={toggle}>
                    <div className={style.bar}></div>
                </button>

                <div className={style.childCont}>
                    <span className={style.blog}>BLOG</span>
                    <span>BOOKS</span>
                    <Link to={"/about"} className={style.link}>
                        <span>ABOUT</span>
                    </Link>

                    <span>CONTACT</span>
                    <div className={style.ico}>
                        <a href="https://www.instagram.com/tobenquincy" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className={style.ig}/>
                        </a>

                        <a href="https://www.tiktok.com/@tobenquincy?_t=8lxWpTnxM5V&_r=1" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTiktok} className={style.tik}/>
                        </a>

                        <a href="mailto:quincyalagbu@gmail.com"  target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGoogle} className={style.google}/>
                        </a>
                    </div>
                </div>

                <div className={`${style.mobileNav} ${isActive ? style.mobile : ''}`}>
                    <span style={{color: "red"}}>BLOG</span>
                    <span>BOOKS</span>
                    <Link to={"/about"} className={style.link}>
                        <span>ABOUT</span>
                    </Link>

                    <span>CONTACT</span>
                    <div className={style.ico}>
                        <a href="https://www.instagram.com/tobenquincy" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className={style.ig}/>
                        </a>

                        <a href="https://www.tiktok.com/@tobenquincy?_t=8lxWpTnxM5V&_r=1" target="_blank"
                           rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTiktok} className={style.tik}/>
                        </a>

                        <a href="mailto:quincyalagbu@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGoogle} className={style.google}/>
                        </a>
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