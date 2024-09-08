import { DateTime } from "luxon";
import "./post.scss";
import { LanguageContext } from "../Language/locale";
import { useContext, useMemo } from "react";

interface BlogPostProps {
    link: string;
    title: string;
    ctime: string;
    mtime: string;
    excerpt: string;
    bgimage?: string;
}

export function BlogPost({ link, title, excerpt, ctime, mtime, bgimage }: BlogPostProps) {
    const locale = useContext(LanguageContext);

    function formatDate(date_str: string) {
        const dt = DateTime.fromISO(date_str);
        return dt.toLocaleString(
            {
                dateStyle: "full",
                hourCycle: "h24",
                timeStyle: "short",
            },
            { locale: locale.language }
        );
    }

    // TOOD: Investigate this not being triggered when changing language
    const display_date = useMemo(() => formatDate(ctime), [locale]);

    return (
        <article className="BlogPost" style={{ backgroundImage: `url(${bgimage})` }}>
            <a href={link}>
                <h2 title={ctime} dangerouslySetInnerHTML={{ __html: title }}></h2>
                <time dateTime={ctime}>📅{display_date}</time>
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
