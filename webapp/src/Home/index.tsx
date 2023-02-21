import BlogRecentPosts from "../Blog/recent";

export default function Home() {
    return (
        <>
            <h1>About me</h1>

            <p>
                I'm SenpaiSilver, A.K.A. Silver, I do coding and enjoy anime, video games &amp;
                japanese culture.
                <br />I produce some content on YouTube (mostly in French) and write a blog (in
                English) that I update a couple of times a year.
            </p>

            <p>I'm currently trying my hand at VTubing (in English and French).</p>

            <h2>Recent blog posts</h2>

            <BlogRecentPosts
                endpoint="https://blog.senpaisilver.com/wp-json/wp/v2/posts"
                per_page={9}
                page={1}
            />

            <h2>Hobbies</h2>

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
