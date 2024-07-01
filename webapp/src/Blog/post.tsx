import "./post.scss";

interface BlogPostProps {
    link: string;
    title: string;
    ctime: string;
    mtime: string;
    excerpt: string;
    bgimage?: string;
}

export function BlogPost({ link, title, excerpt, ctime, mtime, bgimage }: BlogPostProps) {
    function formatDate(date_str: string) {
        const dt = new Date(date_str);
        return (
            dt.getFullYear() +
            "/" +
            (dt.getMonth() + 1).toString().padStart(2, "0") +
            "/" +
            dt.getDate().toString().padStart(2, "0") +
            " " +
            dt.getHours().toString().padStart(2, "0") +
            ":" +
            dt.getMinutes().toString().padStart(2, "0")
        );
    }

    return (
        <article className="BlogPost" style={{ backgroundImage: `url(${bgimage})` }}>
            <a href={link}>
                <h2 title={ctime} dangerouslySetInnerHTML={{ __html: title }}></h2>
                <time dateTime={ctime}>📅{formatDate(ctime)}</time>
                <div className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
            </a>
        </article>
    );
}

export function LoadingBlogPost() {
    return (
        <article className="BlogPost Loading">
            <div>
                <h2>Loading...</h2>
                <div className="placeholder-time"></div>
                <div className="placeholder-excerpt"></div>
            </div>
        </article>
    );
}
