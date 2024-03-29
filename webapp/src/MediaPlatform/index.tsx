import YouTube from "./youtube";
import AssetYTMain from "../assets/yt-main.png";
import AssetYTClips from "../assets/yt-clips.png";
import AssetYTVOD from "../assets/yt-vod.png";
import { useContext } from "react";
import { LanguageContext } from "../Language/locale";
import "./index.scss";
import Twitch from "./twitch";

export default function Social() {
    const locale = useContext(LanguageContext);
    return (
        <div className="MediaPlatform">
            <Twitch
                name={locale.translations("channel_tw_main")}
                handle="senpaisilver"
                image={AssetYTMain}
            />
            <YouTube
                name={locale.translations("channel_yt_main")}
                handle="SenpaiSilver"
                image={AssetYTMain}
            />
            <YouTube
                name={locale.translations("channel_yt_vod")}
                handle="SenpaiSilverVOD"
                image={AssetYTVOD}
            />
            <YouTube
                name={locale.translations("channel_yt_clips")}
                handle="SenpaiSilverClips"
                image={AssetYTClips}
            />
        </div>
    );
}
