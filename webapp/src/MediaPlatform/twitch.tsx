import { Link } from "react-router-dom";
import TwitchIcon from "../assets/twitch-color-icon.png";
import { TwitchStatusQuery } from "../api";
import { useEffect, useState } from "react";

interface TwitchProps {
    name: string;
    handle: string;
    image: string;
}

export default function Twitch({ name, handle, image }: TwitchProps) {
    const query = TwitchStatusQuery();
    const [isLive, setIsLive] = useState<boolean>();
    const [streamTitle, setStreamTitle] = useState<string>("");

    useEffect(() => {
        if (query.isSuccess) {
            const { is_live } = query.data.stream;
            const { title } = query.data;
            setIsLive(is_live);
            setStreamTitle(title);
        }
    }, [query.isSuccess]);

    return (
        <Link className="SocialTwitch" target="_blank" to={`https://twitch.tv/${handle}`}>
            {isLive && <div className="live">Live</div>}
            <img className="channel-profile" src={image} alt={`${name} on Twitch`} />
            <h2>
                <img alt="Twitch" className="icon" src={TwitchIcon} />
                {name}
            </h2>
        </Link>
    );
}
