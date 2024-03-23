import { Link } from "react-router-dom";
import TwitchIcon from "../assets/twitch-color-icon.png";

interface YouTubeProps {
    name: string;
    handle: string;
    image: string;
}

export default function Twitch({ name, handle, image }: YouTubeProps) {
    return (
        <Link className="SocialTwitch" target="_blank" to={`https://youtube.com/@${handle}`}>
            <img className="channel-profile" src={image} />
            <h2>
                <img className="icon" src={TwitchIcon} />
                {name}
            </h2>
        </Link>
    );
}
