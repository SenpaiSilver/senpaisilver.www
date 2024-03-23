import { Link } from "react-router-dom";
import TwitchIcon from "../assets/twitch-color-icon.png";

interface TwitchProps {
    name: string;
    handle: string;
    image: string;
}

export default function Twitch({ name, handle, image }: TwitchProps) {
    return (
        <Link className="SocialTwitch" target="_blank" to={`https://twitch.tv/${handle}`}>
            <img className="channel-profile" src={image} alt={`${name} on Twitch`} />
            <h2>
                <img alt="Twitch" className="icon" src={TwitchIcon} />
                {name}
            </h2>
        </Link>
    );
}
