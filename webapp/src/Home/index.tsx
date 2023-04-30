import BlogRecentPosts from "../Blog/recent";
import ImgGreet from "../assets/Greet.png";
import "./index.scss";
import { Hardware } from "../Hardware";
import { LanguageContext } from "../Language/locale";
import { useContext } from "react";

export default function Home() {
    const locale = useContext(LanguageContext);

    return (
        <>
            <h1>{locale.translations("about_me")}</h1>

            <div className="relative">{locale.translations("AboutMePresentation")}</div>

            <p>I'm currently trying my hand at VTubing (in English and French).</p>

            <h2>{locale.translations("recent_blog_post")}</h2>

            <BlogRecentPosts
                endpoint="https://blog.senpaisilver.com/wp-json/wp/v2/posts"
                per_page={9}
                page={1}
            />

            <h2>{locale.translations("hardware")}</h2>

            <Hardware />

            <h2>{locale.translations("hobbies")}</h2>

            <ul>
                <li>Anime;</li>
                <li>Video games;</li>
                <li>Coding &amp; computers;</li>
                <li>Gunpla;</li>
                <li>Photography;</li>
            </ul>
        </>
    );
}
