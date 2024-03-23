import { Link } from "react-router-dom";

interface YouTubeProps {
    name: string;
    handle: string;
    image: string;
}

export default function YouTube({ name, handle, image }: YouTubeProps) {
    return (
        <Link className="SocialYouTube" to={`https://youtube.com/@${handle}`}>
            <h2>{name}</h2>
            <img src={image} />
        </Link>
    );
}
