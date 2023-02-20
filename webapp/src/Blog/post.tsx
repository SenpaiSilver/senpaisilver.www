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
                    backgroundPositionY: "-1rem",
                    ...articleStyle
                });
            }
        };
        if (bgimage != undefined && bgimage !== "") {
            getImage(bgimage);
        }
    }, []);

    return <article className="BlogPost" style={articleStyle}>
        <a href={link}>
            <h2 title={ctime}>{title}</h2>
            <time dateTime={ctime}>📅{ctime}</time>
            <div className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        </a>
    </article>;
}
