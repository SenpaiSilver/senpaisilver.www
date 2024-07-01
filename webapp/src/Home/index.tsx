import BlogRecentPosts from "../Blog/recent";
import AssetCrossedArm from "../assets/crossedarms.png";
import "./index.scss";
import { Hardware } from "../Hardware";
import { LanguageContext } from "../Language/locale";
import { useContext } from "react";
import Social from "../MediaPlatform";

export default function Home() {
    const locale = useContext(LanguageContext);

    return (
        <>
            <h1>{locale.translations("channels")}</h1>
            <Social />
            <h1>{locale.translations("about_me")}</h1>

            <div className="relative">
                <div className="desktop-60">{locale.translations("AboutMePresentation")}</div>
                <img className="avatar" src={AssetCrossedArm} alt="Myself: SenpaiSilver" />
            </div>

            <h2>{locale.translations("recent_blog_post")}</h2>

            <BlogRecentPosts endpoint="/api/blog/recent" per_page={9} page={1} />

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
