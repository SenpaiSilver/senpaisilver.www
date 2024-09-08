import { useEffect, useState } from "react";
import { BlogPost, LoadingBlogPost } from "./post";
import "./recent.scss";

interface BlogRecentPostsProps {
    endpoint: string;
    per_page: number;
    page: number;
}

interface BlogRecentPostsResponse {
    id: number;
    excerpt: string;
    title: string;
    link: string;
    ctime: string;
    mtime: string;
    bg_image: string | null;
}

interface Post {
    id: number;
    title: string;
    excerpt: string;
    link: string;
    bg_image: string;
    ctime: string;
    mtime: string;
}

export default function BlogRecentPosts({ endpoint, per_page, page }: BlogRecentPostsProps) {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch(build_endpoint());
            if (response.status < 400) {
                setPosts(
                    (await response.json()).map((post: BlogRecentPostsResponse) => {
                        const { id, link } = post;
                        const excerpt = post.excerpt;
                        const title = post.title;
                        const ctime = post.ctime;
                        const mtime = post.mtime;
                        const bg_image = post.bg_image;
                        console.log(post.bg_image);
                        return {
                            id,
                            title,
                            excerpt,
                            link,
                            bg_image,
                            ctime,
                            mtime,
                        };
                    })
                );
            }
        };
        getPosts();
    }, []);

    function build_endpoint() {
        const params = Object.entries({
            per_page: per_page,
            page: page,
        })
            .map(
                ([key, value]: [string, number | string]) =>
                    encodeURIComponent(key) + "=" + encodeURIComponent(value)
            )
            .join("&");
        return `${endpoint}?${params}`;
    }

    return (
        <div className="BlogRecentPosts OneLine">
            {!posts.length ? (
                <>
                    {[...Array(3)].map((_, index) => (
                        <LoadingBlogPost key={index} />
                    ))}
                </>
            ) : (
                posts.map((post: Post) => (
                    <BlogPost
                        key={post.ctime}
                        link={post.link}
                        title={post.title}
                        excerpt={post.excerpt}
                        ctime={post.ctime}
                        mtime={post.mtime}
                        bgimage={post.bg_image}
                    />
                ))
            )}
        </div>
    );
}
