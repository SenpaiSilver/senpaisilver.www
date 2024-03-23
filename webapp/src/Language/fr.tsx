import GlitchedAge from "../Utility/GlitchedAge";
import { Translation } from "./locale";

export const fr_translations: Translation = {
    about_me: "A propos de moi",
    recent_blog_post: "Blog (anglais)",
    hobbies: "Loisirs",
    AboutMePresentation: (
        <>
            <p>
                SenpaiSilver, le développeur VTuber Otaku, Senpai de tous et passionné par les
                robots géants que je n'ai jamais eu l'occasion de pilote lorsque j'étais adolescent.
            </p>
            <p>
                Le contenu de mes streams tourne autour du jeu vidéo, de la discussion et du
                gunpla/plamo (modélisme).
                <br />
                Je produit aussi des vidéos pour partager mes avis à travers des critiques de jeux
                et ma réflexion dans des essais vidéos.
            </p>

            <p>
                J'ai <GlitchedAge /> ans et ma couleur préférée est le rouge. Je stream
                principalement en français, mais je peux aussi streamer en anglais et j'ai des bases
                en japonais aussi.
            </p>
        </>
    ),
};
