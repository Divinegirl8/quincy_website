import styles from  "./index.module.css"
import NavBar from "../../components/reusables/NavBar";
import book1 from "../../assests/booksImg/book1a.jpeg";
import book2 from "../../assests/booksImg/book2a.jpeg";
import {Link} from "react-router-dom";
const Books = () =>{
    return(
        <>
            <NavBar textColor={"white"} textColor2={"yellow"} textColor3={"white"} textColor4={"white"}/>

            <div className={styles.bookCont}>
                <div className={styles.book1}>
                    <img src={book1} alt={"book 1"}/>
                    <h3>OMEIHEUKWU: THE ONE WHO DOES EXTRAORDINARY THINGS </h3>
                    <h4 className={styles.wrt}>Effortlessly and spiritually nutritious. A grandfather-grandson relationship in shades you've never seen before. A solid reminder of the power that memories carry.<Link to={"/bookView"} className={styles.lnk}>learn more</Link></h4>
                </div>

                <div className={styles.book2}>
                    <img src={book2} alt={"book 2"}/>
                    <h3 className={styles.span2}>THE LITERARY SEDUCER: LURING YOUR READERS INTO YOUR BOOK AND KEEPING THEM SPELLBOUND FOR GOOD</h3>
                    <h4>Never give your readers a reason to toss your book aside!<Link to={"/book2"} className={styles.lnk}>learn more</Link></h4>
                </div>
            </div>
        </>
    )
}

export default Books;