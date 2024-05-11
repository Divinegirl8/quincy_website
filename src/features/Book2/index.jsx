import NavBar from "../../components/reusables/NavBar";
import style from "./index.module.css";
import {Link} from "react-router-dom";
import additionalBook from "../../assests/booksImg/book1.jpeg";
import book2 from "../../assests/booksImg/book2.jpeg";
import pht from "../../assests/booksImg/quincy.jpeg";

const Book2 = () => {
    return(
        <>
            <NavBar textColor={"white"} textColor2={"yellow"} textColor3={"white"} textColor4={"white"}/>

            <div className={style.mainContainer2}>
                <div className={style.additionalBookSection2}>
                    <h3>You may also read</h3>
                    <Link to={"/bookView"}>
                        <img src={additionalBook} alt="Additional Book Cover" className={style.additionalBookImage2}/>
                    </Link>
                    <div className={style.additionalBookInfo2}>
                        <p>Effortlessly and spiritually nutritious. A grandfather-grandson relationship in shades you've
                            never seen before. A solid reminder of the power that memories carry.</p>
                    </div>
                </div>
                <div className={style.bookContainer2}>
                    <div className={style.bookHeader2}>
                        <h1>THE LITERARY SEDUCER: LURING YOUR READERS INTO YOUR BOOK AND KEEPING THEM SPELLBOUND FOR
                            GOOD</h1>

                    </div>
                    <img src={book2} alt="Omeiheukwu Book Cover" className={style.bookImage2}/>
                    <h3 className={style.bookDescription2}>
                        Never give your readers a reason to toss your book aside!
                    </h3>
                    <p>
                        Readers can be very unforgiving, especially these days, with all the distractions of modern
                        life. Hence, they usually have short attention spans, which means they may have trouble
                        concentrating on one thing for quite a long time without being easily distracted. Truth be told,
                        if your book doesn't do what it's meant to do to them, then they've already dumped it and are
                        off doing something else.
                    </p>

                    <p>
                        Have you ever read a book you felt compelled to keep reading? A powerful read, so magnetic you
                        couldn't put it down in favor of something else. You were literally unable to look away because
                        your eyes were always glued to its pages. You read it at home, at your place of work, at school,
                        during your lunch breaks, and even past your bedtime. It kept you enthralled all the way
                        through, the plot captivated you, and the characters tugged at your heartstrings. You read it
                        because you not only wanted to know what happened next, but also wondered what was actually
                        going on. Later, when you were done and had come back to yourself, you started to wonder in awe
                        and amazement: How did this writer do this to me? How did this writer use mere words to
                        captivate, seduce and hold me? You have definitely fallen for such a book before.
                    </p>

                    <p>
                        As a writer, crafting an awesome storyline is only half the battle. Do you ever take the time to
                        assess how you can command the attention of your readers: lure them in, keep them gripped to the
                        very end and have them coming back for more? Commanding readers' attention isn't complicated as
                        people often make it. In fact, you don't have to force it. You don't have to go overboard. And
                        it is even more effective when your readers are not particularly aware of the game you're
                        playing.
                    </p>

                    <p>
                        Simple, straightforward and quite conversational, THE LITERARY SEDUCER: LURING YOUR READERS INTO
                        YOUR BOOK AND KEEPING THEM SPELLBOUND FOR GOOD offers utterly potent tips and techniques in
                        three parts for both published and aspiring authors of fiction. It unravels certain
                        misconceptions about the art of commanding readers' attention and shows how best to execute
                        certain things a writer may already know.
                    </p>

                    <h3>REVIEWS</h3>
                    <p>
                        'It is one thing to have a story idea, and it is another thing to know how to lure, hook and
                        keep your readers glued to the end. In THE LITERARY SEDUCER, Quincy remarkably captures the
                        practical steps to commanding readers' attention and achieving total transformation at
                        storytelling. As a writing coach, I highly recommend this book to those who want to take their
                        writing to the next level. This is undoubtedly a must-have.'
                    </p>
                    <h4>— Precious Osikha Esq.
                        Co-founder, Bookney App, Bestselling Author, and Writing Coach.</h4>

                    <p>
                        'There is one thing about Quincy's LITERARY SEDUCER that is simply first-rate and that is
                        putting theory in plain language. Who knew the art of commanding readers' attention could be
                        this sweet and uncomplicated? THE LITERARY SEDUCER is simply gold. A next-level game changer for
                        powerful fiction.'
                    </p>
                    <h4>
                        — Divine A. James
                        Creative and Programmer.
                    </h4>

                    <p>
                        'If you are a fiction writer or you're aspiring to become one, THE LITERARY SEDUCER is
                        absolutely a blueprint for your fiction writing journey. Quincy not only shares awe-inspiring
                        tips and techniques fiction writers can utilize in commanding readers' attention but also
                        delivers this with a simple, straightforward and conversational approach.'
                    </p>
                    <h4>
                        — Grace Onyema
                        Author and Digital Entrepreneur.
                    </h4>

                    <p>
                        Find out now how you can take your writing to the next level without trying too hard!
                    </p>
                    <div className={style.authorInfo2}>
                        <img src={pht} alt="Quincy Alagbu" className={style.authorImage2}/>
                        <p>Quincy Alagbu's "The Literary Seducer" is a must-read guide for fiction authors, both
                            seasoned and aspiring. Divided into three parts, it offers potent tips and techniques to
                            captivate readers. Dispelling misconceptions, it provides straightforward advice on crafting
                            compelling storylines without overwhelming readers. With its conversational style, this
                            invaluable resource helps writers master the art of keeping readers hooked. Whether you're a
                            veteran writer or just starting out, "The Literary Seducer" is your key to captivating your
                            audience from start to finish.</p>
                    </div>
                    <div className={style.bookLinks2}>
                        <a href="https://www.amazon.com/LITERARY-SEDUCER-readers-keeping-spellbound-ebook/dp/B09LC3PRNN?ref_=ast_author_dp"
                           className={style.bookLink2} target="_blank" rel="noopener noreferrer">Get the eBook</a>
                    </div>
                </div>
            </div>

            <div className={style.additionalBookMobileSection2}>
                <h3>You may also read</h3>
                <Link to={"/bookView"}>
                    <img src={additionalBook} alt="Additional Book Cover" className={style.additionalBookImage2}/>
                </Link>

            </div>
        </>
    )
}

export default Book2