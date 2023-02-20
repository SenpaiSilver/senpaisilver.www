import { useEffect, useState } from 'react';
import "./post.scss";

interface BlogPostProps {
    link: string;
    title: string;
    ctime: string;
    mtime: string;
    excerpt: string;
    bgimage?: string;
}

interface FeaturedMediaResponse {
    id: number;
    guid: { [rendered: string]: string };
}

export function BlogPost({ link, title, excerpt, ctime, mtime, bgimage }: BlogPostProps) {
    const [articleStyle, setArticleStyle] = useState<{ [key: string]: string }>({})

    useEffect(() => {
        const getImage = async (endpoint: string) => {
            const response = await fetch(endpoint);
            if (response.status < 400) {
                const result: FeaturedMediaResponse = await response.json();
                setArticleStyle({
                    backgroundImage: `url(${result.guid.rendered})`,
                    ...articleStyle
                });
            }
        };
        if (bgimage != undefined && bgimage !== "") {
            getImage(bgimage);
        }
    }, []);

    function formatDate(date_str: string) {
        const dt = new Date(date_str);
        return (
            dt.getFullYear() + "/"
            + (dt.getMonth() + 1).toString().padStart(2, "0") + "/"
            + dt.getDate().toString().padStart(2, "0") + " "
            + dt.getHours().toString().padStart(2, "0")
            + ":" + dt.getMinutes().toString().padStart(2, "0")
        );
    }

    return <article className="BlogPost" style={articleStyle}>
        <a href={link}>
            <h2 title={ctime}>{title}</h2>
            <time dateTime={ctime}>📅{formatDate(ctime)}</time>
            <div className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        </a>
    </article>;
}
