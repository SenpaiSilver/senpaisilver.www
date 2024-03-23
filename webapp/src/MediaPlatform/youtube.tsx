import { Link } from "react-router-dom";
import YouTubeIcon from "../assets/youtube-color-icon.png";

interface YouTubeProps {
    name: string;
    handle: string;
    image: string;
}

export default function YouTube({ name, handle, image }: YouTubeProps) {
    return (
        <Link className="SocialYouTube" to={`https://youtube.com/@${handle}`}>
            <img className="channel-profile" src={image} />
            <h2>
                <img className="icon" src={YouTubeIcon} />
                {name}
            </h2>
        </Link>
    );
}
