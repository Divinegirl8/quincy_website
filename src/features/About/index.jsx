import style from "./index.module.css"
import pht from "../../assests/booksImg/quincy.jpeg"
import NavBar from "../../components/reusables/NavBar";
const About = () =>{
    return(
        <>
            <NavBar textColor={"white"} textColor2={"white"} textColor3={"yellow"} textColor4={"white"}/>
            <div className={style.mainCt}>
                <div className={style.fto}>
                    <img src={pht} alt={"quincy pix"} className={style.foto}/>
                </div>
                <div className={style.writeUp}>
                <p>
                      Quincy Alagbu (Full Name: Quincy Tobenna Alagbu), also known as Toben Quincy and Sir Quincy, is an award winning writer, copywriter, editor, ghostwriter, voice over artist, spoken-word artist and writing coach, who is passionate about making (and helping other people make) a powerful and lasting impact through writing and storytelling.
                  </p>

                    <p>
                        He has mentored a good number of writers who have gone on to become successful authors. He has also written powerful commercial advertisements for numerous businesses and collaborated with various international brands and personalities.
                    </p>

                    <p>
                        Quincy is a co-head of some of the world's fast-growing writing and storytelling communities today, and has judged a number of globally recognized literary contests. His work has appeared in various publications.
                    </p>

                    <p>
                        In 2019, during the first season of The Amethyst Short Story Contest, his story "Sometime In The Twentieth Century" stole readers' hearts and earned him the number one spot out of the most liked stories.
                    </p>

                    <p>
                        He was nominated for Bookney's Creative Male Writer Of The Year Award in 2021 and eventually clinched it, for his impact and contribution in promoting the reading and writing culture in Africa.
                    </p>

                    <p>
                        During SOL's Readers' Pick Awards 2023, his Afro Fantasy short story "Whispers Of Light And Air" in the Christmas Anthology "Will The Jingle Bells Ring?" bagged three solid awards: Best Opening Line, Most Creative Plot, and the foremost category—Readers' Favorite/Best Story.
                    </p>

                    <p>
                        Quincy is the author of the fast-selling book THE LITERARY SEDUCER: LURING YOUR READERS INTO YOUR BOOK AND KEEPING THEM SPELLBOUND FOR GOOD, a powerful guide that offers potent tips and techniques in three parts for both published and aspiring authors of fiction on how they can command a reader's attention effortlessly.
                    </p>

                    <p>
                        He is also the author of the Amazon Best-Selling Memoir OMEIHEUKWU: THE ONE WHO DOES EXTRAORDINARY THINGS, a punchy masterpiece, in which he proves, with profound wisdom, that there truly are people who bring a special kind of light into this world—a light so wondrous that even after they are gone, it never stops dazzling.
                    </p>

                    <p>
                        For Quincy, there is nothing so scrumptious as weaving words together to birth a compelling piece of content. As a literary powerhouse (and a ghostwriter), he has worked with busy individuals, birthing riveting pieces of writing, fiction and nonfiction, memoirs, biographies and so forth. He revels in assisting you and thousands of others in sharing your stories with the world. He speaks and teaches the compelling language that your target audience can't resist. Through his words, he grants your brand wings and ensures that it soars as high as possible.
                    </p>
                    <p>
                        Quincy is also a six-foot-four-inch-tall librocubicularist who can be found reading more than one book at the same time. When he is not reading or doing writing or crafting stories—mostly action-packed afro-futuristic stories—in his head, then he is either being a foodie or sketching things, which he pairs with beautiful pieces of poetry.
                    </p>
                    <p>
                        Quincy lives in Nigeria. He is from Awka, in Anambra, but was born in Enugu and grew up in Lagos. He studied Business Administration at Nnamdi Azikiwe University, Awka (NAU).
                    </p>
                </div>
            </div>

        </>
    )
}

export default About