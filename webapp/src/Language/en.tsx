import GlitchedAge from "../Utility/GlitchedAge";
import { Translation } from "./locale";

export const en_translations: Translation = {
    menu_clipping: "Clipping",
    about_me: "About me",
    recent_blog_post: "Recent blog posts",
    hardware: "Hardware",
    hobbies: "Hobbies",
    channels: "Channels",
    channel_yt_main: "Main channel",
    channel_yt_vod: "Stream archive",
    channel_yt_clips: "Clips",
    channel_tw_main: "Live streaming",
    AboutMePresentation: (
        <>
            <p>
                I, SenpaiSilver, the Otaku VTuber coding monkey, Senpai of all and kouhai to none,
                am a big fan of giant robots that I could not pilot during my teens.
            </p>
            <p>
                My content revolves around gaming, talking and gunpla/plamo (models). I also produce
                videos such as reviews and essays in French so I can share passions, disappointment
                and some deep thinking.
            </p>
            <p>
                I'm <GlitchedAge /> years old and my favorite color is none other than RED. I stream
                mainly in French but do not hesitate to speak to me in English. I'm also able to
                speak a bit of Japanese.
            </p>

            <h2>History</h2>
            <h3>The beginning</h3>
            <p>
                The very first video that I published on YouTube dates back to the September 27
                <sup>th</sup> 2006. My very first scripted video came out in 2020.
                <br />
                The stream I consider being my very first and real one happened in January 2020 and
                at the time I did not have an avatar yet. My avatar first appeared in 2021.
            </p>
            <h3>2022</h3>
            <p>
                For 2022 I wanted to write and produce at least one video per month in French. That
                was a way for me to try to commit to a schedule and work on writing and editing
                videos in a more focus manner.
            </p>
            <h3>2023</h3>
            <p>
                During 2023 I decided to focus live streaming et got affiliated with Twitch on March
                20<sup>th</sup> 2023. During the same year I started streaming model building
                (gunpla & plamo).
            </p>
            <h3>2024</h3>
            <p>
                Starting 2024 I reworked my avatar's textures. I redid the face and eyes textures, I
                reworked the clothing and the colors.
            </p>
        </>
    ),
    clipping_head_rules: "Rules regarding clipping",
    clipping_p1: (
        <p>
            The content I provide through my streams and videos on my Twitch and YouTube channels
            can be used within the guidelines set by fair use.
            <br />
            You are allowed to make clips from my streams and videos on Twitch and YouTube but you
            must follow the following rules:
        </p>
    ),
    clipping_rules: (
        <ol>
            <li>
                Any form of generative AI is strictly forbidden. You are not allowed to use my
                content for training AI or to use generative AI with my content.
            </li>
            <li>
                You must not misrepresent anyone buy removing context and remixing a clip to make
                anyone say things they did not say, even for satire purpose;
            </li>
            <li>You must credit me;</li>
            <li>You may monetize clips you have made only through YouTube ads;</li>
            <li>
                You are not allowed to use my clips, image, voice and likeness to endorse or promote
                a product or a service;
            </li>
            <li>Rules, terms &amp; conditions may change without prior notice.</li>
        </ol>
    ),
    clipping_head_credit: "Crediting",
    clipping_head_credit_how: "How?",
    clipping_credit_how: (
        <p>
            You need to properly credit myself by linking my Twitch channel (
            <code>https://twitch.tv/senpaisilver</code>) if you are clipping from my streams or from
            an archived stream.
            <br />
            If you are clipping a video I made on YouTube please credit me with the link to my video
            and by mentionning my name with an @.
        </p>
    ),
    clipping_head_credit_where: "Where?",
    clipping_credit_where: (
        <>
            <p>
                Credit must be giving in the description of the clip as a direct link by clearly
                mentionning my name and link such as:
            </p>
            <ul>
                <li>SenpaiSilver: https://twitch.tv/senpaisilver</li>
                <li>Checkout SenpaiSilver at https://twitch.tv/senpaisilver</li>
                <li>@SenpaiSilver https://youtube.com/@SenpaiSilver</li>
                <li>Clipped from https://www.youtube.com/watch?v=U2uwQ716-QU by @SenpaiSilver</li>
            </ul>
            <p>
                Even if you add a hypertext link over my username you need to specify my link in
                full text.
                <br />
                You may not use a link shortener to link or credit me.
            </p>
        </>
    ),
    clipping_head_monetization: "Monetization",
    clipping_monetization: (
        <>
            <p>
                You may monetize the clips you made only through YouTube ads. You are not allowed to
                monetize my clips through crowfunding (such as Patreon, Ko-Fi...) or paywall my
                clips.
            </p>
            <p>You are not allowed to use my clips within a sponsored video.</p>
            <p>
                You are not allowed to use my clips, image, voice and likeness to endorse or promote
                a product or a service
            </p>
        </>
    ),
};
