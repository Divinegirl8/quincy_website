import book1 from "../../assests/booksImg/book1.jpeg";
import style from "./index.module.css";
import pht from "../../assests/booksImg/quincy.jpeg";
import additionalBook from "../../assests/booksImg/book2.jpeg";
import NavBar from "../../components/reusables/NavBar";
import {Link} from "react-router-dom";
const Book1 = () => {
    return (
        <>
            <NavBar textColor={"white"} textColor2={"yellow"} textColor3={"white"} textColor4={"white"}/>
            <div className={style.mainContainer}>
                <div className={style.additionalBookSection}>
                    <h3>You may also read</h3>
                    <Link to={"/book2"}>
                        <img src={additionalBook} alt="Additional Book Cover" className={style.additionalBookImage}/>
                    </Link>
                    <div className={style.additionalBookInfo}>
                        <p>Never give your readers a reason to toss your book aside!</p>
                    </div>
                </div>
                <div className={style.bookContainer}>
                    <div className={style.bookHeader}>
                        <h1>Omeiheukwu: The One Who Does Extraordinary Things</h1>

                    </div>
                    <img src={book1} alt="Omeiheukwu Book Cover" className={style.bookImage}/>
                    <h4 className={style.bookDescription}>
                        Effortlessly and spiritually nutritious. A grandfather-grandson relationship
                        in shades you've never seen before. A solid reminder of the power that memories carry.
                    </h4>
                    <p className={style.ome}>
                        Omeiheukwu: The One Who Does Extraordinary Things is a highly uplifting account of a loved one
                        who has passed. A glorious tribute to a man who brought color to so many lives. With exquisite
                        tunefulness and compelling simplicity that is, at times, deeply moving, and at times,
                        refreshingly amusing, Quincy Alagbu weaves together a personal story inspired by his beloved
                        grandfather who entered eternal rest on September 21, 2021.
                        In this punchy masterpiece, Quincy Alagbu proves, with profound wisdom, that there truly are
                        people who bring a special kind of light into this world—a light so wondrous that even after
                        they are gone, it never stops dazzling.
                        Omeiheukwu: The One Who Does Extraordinary Things, with its stirring messages, is hands down a
                        must-feel. A work you will not only read but also share!
                    </p>

                    <div className={style.authorInfo}>
                        <img src={pht} alt="Quincy Alagbu" className={style.authorImage}/>
                        <p>Quincy Alagbu explores the profound impact of his grandfather's legacy in this touching
                            narrative.
                            His storytelling captures the essence of cherished memories and the lasting influence they
                            have.</p>
                    </div>
                    <div className={style.bookLinks}>
                        <a href="https://www.amazon.com/dp/B0CLLHKBRH?ref_=pe_3052080_397514860"
                           className={style.bookLink} target="_blank" rel="noopener noreferrer">Get the Hard Copy</a>
                        <a href="https://selar.co/w96nx9"
                           className={style.bookLink} target="_blank" rel="noopener noreferrer">Get the eBook</a>
                    </div>
                </div>
            </div>

            <div className={style.additionalBookSectionMobile}>
                <h3>You may also read</h3>
                <Link to={"/book2"}>
                    <img src={additionalBook} alt="Additional Book Cover" className={style.additionalBookImage}/>
                </Link>

            </div>

        </>
    )
}

export default Book1;
