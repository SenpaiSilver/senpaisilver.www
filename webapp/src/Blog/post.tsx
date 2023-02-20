import { useEffect, useState } from 'react';

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
    guid: {[rendered: string]: string};
}

export function BlogPost({ link, title, excerpt, ctime, mtime, bgimage }: BlogPostProps) {
    const [articleStyle, setArticleStyle] = useState<{ [key: string]: string }>({})

    useEffect(() => {
        const getImage = async (endpoint: string) => {
            const response = await fetch(endpoint);
            if (response.status < 400) {
                const result: FeaturedMediaResponse = await response.json();
                setArticleStyle({ backgroundImage: `url(${result.guid.rendered})`, ...articleStyle });
            }
        };
        if (bgimage != undefined && bgimage !== "") {
            getImage(bgimage);
        }
    }, []);

    return <article style={articleStyle}>
        <div className="content">
            <h2><a href={link}>{title}</a></h2>
            <time dateTime={ctime}>📅{ctime}</time>
            <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        </div>
    </article>;
}
