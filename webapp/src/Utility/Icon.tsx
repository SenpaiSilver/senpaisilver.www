import "./Icon.scss";
import kofi_white from "./icons/ko-fi_outline.svg";
import twitter_white from "./icons/twitter_white.svg";
import twitch_white from "./icons/twitch_white.svg";
import youtube_white from "./icons/youtube_white.svg";

const icons: { [key: string]: string } = {
    kofi: kofi_white,
    twitter: twitter_white,
    twitch: twitch_white,
    youtube: youtube_white,
};

interface IconProps {
    icon: string;
    block?: boolean;
}

export default function Icon({ icon, block }: IconProps) {
    const style = block ? "block" : "inline";

    if (!icons[icon]) {
        return <div className="Icon block">Missing Icon for {icon}</div>;
    }

    return <img className={`Icon ${style}`} src={icons[icon]} />;
}
