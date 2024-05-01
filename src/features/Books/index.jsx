import styles from  "./index.module.css"
import NavBar from "../../components/reusables/NavBar";
import book1 from  "../../assests/book1.jpeg";
import book2 from  "../../assests/book2.jpeg";
import {Link} from "react-router-dom";
const Books = () =>{
    return(
        <>
            <NavBar textColor={"white"} textColor2={"yellow"} textColor3={"white"} textColor4={"white"}/>

            <div className={styles.bookCont}>
                <div className={styles.book1}>
                    <img src={book1} alt={"book 1"}/>
                    <h3>OMEIHEUKWU: THE ONE WHO DOES EXTRAORDINARY THINGS </h3>
                    <h4>Effortlessly and spiritually nutritious. A grandfather-grandson <span>relationship in shades you've never seen before. A solid reminder of the power that memories carry.<Link to={""} className={styles.lnk}>learn more</Link></span></h4>
                </div>

                <div className={styles.book2}>
                    <img src={book2} alt={"book 2"}/>
                    <h3>THE LITERARY SEDUCER: LURING YOUR READERS INTO YOUR BOOK <span className={styles.span2}>AND KEEPING THEM SPELLBOUND FOR GOOD</span>
                    </h3>
                    <h4>Never give your readers a reason to toss your book aside!<Link to={""} className={styles.lnk}>learn more</Link></h4>
                </div>
            </div>
        </>
    )
}

export default Books;