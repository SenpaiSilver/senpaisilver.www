import "./Icon.scss";
import kofi_white from "./icons/ko-fi_outline.svg";
import twitter_white from "./icons/twitter_white.svg";
import twitch_white from "./icons/twitch_white.svg";
import youtube_white from "./icons/youtube_white.svg";
import desktop from "./icons/desktop.svg";
import laptop from "./icons/laptop.svg";
import server from "./icons/server.svg";
import blog from "./icons/blog.svg";
import github from "./icons/github_white.svg";
import user from "./icons/user.svg";

const icons: { [key: string]: string } = {
    kofi: kofi_white,
    twitter: twitter_white,
    twitch: twitch_white,
    youtube: youtube_white,
    desktop: desktop,
    laptop: laptop,
    server: server,
    blog: blog,
    github: github,
    user: user,
};

interface IconProps {
    icon:
        | "blog"
        | "desktop"
        | "github"
        | "kofi"
        | "laptop"
        | "server"
        | "twitter"
        | "twitch"
        | "youtube"
        | "user";
    block?: boolean;
}

export default function Icon({ icon, block }: IconProps) {
    const style = block ? "block" : "inline";

    if (!icons[icon]) {
        return <div className="Icon block">Missing Icon for {icon}</div>;
    }

    return <img className={`Icon ${style} icon-${icon}`} src={icons[icon]} />;
}
