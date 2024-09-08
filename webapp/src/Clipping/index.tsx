import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AppContext } from "../context";
import { LanguageContext } from "../Language/locale";

export default function Clipping() {
    const useAppContext = useContext(AppContext);
    const locale = useContext(LanguageContext);

    return (
        <>
            <Helmet>
                <link rel="canonical" href="https://senpaisilver.com/clipping" />
                <title>P {useAppContext.title}</title>
            </Helmet>
            <section>
                <div>
                    <h2>Rules regarding clipping</h2>
                    <p>
                        The content I provide through streams and videos on my Twitch and YouTube
                        channels can be used within the guidelines set by fair use.
                        <br />
                        You are allowed to make clips from my streams and videos on Twitch and
                        YouTube but you must follow the following rules:
                    </p>
                    <ol>
                        <li>
                            Any form of generative AI is strictly forbidden. are not allowed to use
                            my content for training AI or to use generative AI with my content.
                        </li>
                        <li>
                            You must not misrepresent anyone but removing context and remixing a
                            clip to make anyone say things they did not say, even for satire
                            purpose;
                        </li>
                        <li>You must credit me;</li>
                        <li>You may monetize clips only through YouTube ads;</li>
                        <li>
                            You are not allowed to use my clips, image, voice and likeness to
                            endorse or promote a product or a service.
                        </li>
                    </ol>

                    <h2>Crediting</h2>
                    <h3>How?</h3>
                    <p>
                        You need to properly credit myself by linking my Twitch channel (
                        <code>https://twitch.tv/senpaisilver</code>) if you are clipping from my
                        streams or from an archived stream.
                    </p>
                    <h3>Where?</h3>
                    <p>
                        Credit must be giving in the description of the clip as a direct link by
                        clearly mentionning my name and link such as:
                    </p>
                    <ul>
                        <li>SenpaiSilver: https://twitch.tv/senpaisilver</li>
                        <li>Checkout SenpaiSilver at https://twitch.tv/senpaisilver</li>
                        <li>@SenpaiSilver https://youtube.com/@SenpaiSilver</li>
                        <li>Clip from @SenpaiSilver at https://youtube.com/@SenpaiSilver</li>
                    </ul>
                    <p>
                        Even if you add a hypertext link over my username you need to specify my
                        link in full text.
                    </p>

                    <h2>Monetisation</h2>
                    <p>
                        You may monetize my clips only with YouTube ads. You are not allowed to
                        monetize my clips through crowfunding (such as Patreon, Ko-Fi...) or paywall
                        my clips.
                    </p>
                    <p>You are not allowed to use my clips within a sponsored video.</p>
                    <p>
                        You are not allowed to use my clips, image, voice and likeness to endorse or
                        promote a product or a service
                    </p>
                </div>
            </section>
        </>
    );
}
