import { useEffect, useState } from 'react';
import { BlogPost } from './post';

interface BlogRecentPostsProps {
    endpoint: string;
    per_page: number;
    page: number;
}

interface BlogRecentPostsResponse {
    id: number;
    excerpt: {[rendered: string]: string};
    title: {[rendered: string]: string};
    link: string;
    _links: any;
    date_gmt: string;
    modified_gmt: string;
    featuredmedia: Array<{[href: string]: string}>;
}

export default function BlogRecentPosts({ endpoint, per_page, page }: BlogRecentPostsProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [posts, setPosts] = useState<any>([]);

    // if (per_page === undefined || per_page <= 0) per_page = 8;
    // if (page === undefined || page <= 0) page = 1;

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch(build_endpoint());
            if (response.status < 400) {
                setPosts((await response.json()).map((post: BlogRecentPostsResponse) => {
                    const {id, link} = post;
                    const featuredmedia = post._links["wp:featuredmedia"]
                    const excerpt = post.excerpt.rendered;
                    const title = post.title.rendered;
                    const ctime = post.date_gmt;
                    const mtime = post.modified_gmt;
                    const bgimage = post._links["wp:featuredmedia"][0].href;
                return {id, title, excerpt, featuredmedia, link, bgimage, ctime, mtime};
            }));
                setIsLoading(false);
                console.log(posts);
            }
        };
        getPosts();
    }, []);

    function build_endpoint() {
        const params = Object.entries({
            per_page: per_page,
            page: page,
        }).map(([key, value]: [string, number | string]) => encodeURIComponent(key) + "=" + encodeURIComponent(value)).join("&");
        return `${endpoint}?${params}`;
    }

    return (<>
        {posts.map((post: any) => <BlogPost key={post.ctime} link={post.link} title={post.title} excerpt={post.excerpt} ctime={post.ctime} mtime={post.mtime} bgimage={post.bgimage} />)}
    </>);
}
