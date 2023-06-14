interface PlaylistProps {
    playlist: string;
    nocookie?: boolean;
    width?: number;
    height?: number;
}

// PL6C9l_SBwUH7UlT_9WuBGGlRodp0ee6JN
// https://www.youtube.com/playlist?list=PL6C9l_SBwUH7UlT_9WuBGGlRodp0ee6JN
// https://www.youtube-nocookie.com/embed/videoseries?list=PL6C9l_SBwUH7UlT_9WuBGGlRodp0ee6JN

export default function Playlist({ playlist, nocookie, width, height }: PlaylistProps) {
    return (
        <iframe
            width={width || "560"}
            height={height || "315"}
            src={`https://www.youtube${
                nocookie ? "-nocookie.com" : ""
            }/embed/videoseries?list=${playlist}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    );
}
