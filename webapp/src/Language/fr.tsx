import GlitchedAge from "../Utility/GlitchedAge";
import { Translation } from "./locale";

export const fr_translations: Translation = {
    menu_clipping: "Clipping",
    about_me: "A propos de moi",
    recent_blog_post: "Blog (anglais)",
    hobbies: "Loisirs",
    channels: "Chaînes",
    channel_yt_main: "Chaîne principale",
    channel_yt_vod: "Archives de streams",
    channel_yt_clips: "Clips",
    channel_tw_main: "Streaming",
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

            <h2>Historique</h2>
            <h3>Le commencement</h3>
            <p>
                Ma toute première première vidéo sur YouTube date du 27 septembre 2006. J'ai réalisé
                ma première vidéo scriptée en 2020.
                <br />
                Je considére que mon premier vrai stream a eu lieu en janvier 2020 sur YouTube, mais
                en réalité mon avatar est apparu en 2021.
            </p>
            <h3>2022</h3>
            <p>
                En 2022 j'ai réalisé au moins une vidéo par mois dans le but de travailler
                l'écriture de vidéos et m'initier de façon sérieuse au montage vidéo.
            </p>
            <h3>2023</h3>
            <p>
                En 2023 j'ai prit la décision de mettre plus sérieusement au stream et je suis
                devenu affilié sur Twich le 20 mars 2023. Cette année marque aussi le début des
                streams durant lesquels je fais du modélisme (gunpla ou plamo).
            </p>
            <h3>2024</h3>
            <p>
                En 2024 mon avatar a été mit à jour. J'ai recréé toutes les textures du visage, des
                yeux et j'ai retravaillé un peu la tenue et les couleurs.
            </p>
        </>
    ),
    clipping_head_rules: "Règles concernant les clips",
    clipping_p1: (
        <p>
            Le contenu distribué à travers mes streams ou mes vidéos, que ce soit sur Twitch ou sur
            YouTube, peut être utilisé en suivant les règles du fair use et les règles définies
            ci-dessous.
        </p>
    ),
    clipping_rules: (
        <ol>
            <li>
                L'utilisation de toutes formes d'IA (intelligence artificielle) est strictement
                interdite.
                <br />
                Vous n'êtes pas autorisé à utiliser mon contenu pour entraîner des modèles ou avec
                de l'IA générative;
            </li>
            <li>
                Il est strictement interdit de dénaturer le contexte, ou de remixer de façon à
                tromper ou faire dire quelque chose qui n'a pas été dit, même dans un cadre
                satirique;
            </li>
            <li>Vous devez me créditer;</li>
            <li>
                Vous pouvez monétiser les clips que vous réaliser seulement à travers des publicités
                YouTube;
            </li>
            <li>
                Vous ne pouvez pas utiliser mes clips, mon image, ma voix ou ma ressemblance pour
                promouvoir des produits ou des services.
            </li>
            <li>
                Les règles et conditions d'utilisation peuvent changer à tout moment sans aucune
                notification.
            </li>
        </ol>
    ),
    clipping_head_credit: "Crédit",
    clipping_head_credit_how: "Comment ?",
    clipping_credit_how: (
        <p>
            Pour me créditer correctement il est important de linker ma chaine Twitch (
            <code>https://twitch.tv/senpaisilver</code>) si les clips provienne de mes streams ou
            des archives de mes streams.
            <br />
            Si mes clips proviennent de vidéos YouTube veuillez me créditer avec le lien de la vidéo
            en faisant en sorte de mentionner mon pseudo avec un @ au début.
        </p>
    ),
    clipping_head_credit_where: "Où ?",
    clipping_credit_where: (
        <>
            <p>
                Il est important de me créditer dans la description du clip avec un lien direct et
                en mentionnant mon nom et lien de la façon suivante:
            </p>
            <ul>
                <li>SenpaiSilver: https://twitch.tv/senpaisilver</li>
                <li>Retrouvez SenpaiSilver à https://twitch.tv/senpaisilver</li>
                <li>@SenpaiSilver https://youtube.com/@SenpaiSilver</li>
                <li>Extrait de https://www.youtube.com/watch?v=U2uwQ716-QU par @SenpaiSilver</li>
            </ul>
            <p>
                Même si vous ajoutez un lien hypertexte par-dessus mon nom vous devez spécifier le
                lien dans son intégralité.
                <br />
                Vous n'avez pas le droit d'utiliser un réducteur de liens pour mes liens ou pour me
                créditer.
            </p>
        </>
    ),
    clipping_head_monetization: "Monétisation",
    clipping_monetization: (
        <>
            <p>
                Vous pouvez monétiser les clips que vous réalisez uniquement à travers les
                publicités YouTube.
                <br />
                Vous n'avez pas le droit de monétiser les clips à travers des plateformes externes
                (tel que Patréon, Ko-Fi...) ou de cacher mes liens derrières des pages payantes.
            </p>
            <p>Il est strictement interdit d'utiliser mes clips dans une vidéo sponsorisé.</p>
            <p>
                Vous ne pouvez pas utiliser mes clips, mon image, ma voix ou ma ressemblance pour
                promouvoir des produits ou des services.
            </p>
        </>
    ),
};
