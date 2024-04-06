import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { en_translations } from "./Language/en";
import { fr_translations } from "./Language/fr";
import { LanguageContext, Translation } from "./Language/locale";
import Menu from "./Menu";
import AppProvider from "./context";

let translation_strings: { [lang: string]: Translation } = {
    fr: fr_translations,
    en: en_translations,
};

interface LanguageContextProps {
    language: string;
    translations: any;
    setLanguage: (lang: string) => void;
}

let detectedLanguage = (localStorage.getItem("language") || navigator.language || "en")
    .split("-")
    .at(0);

if (!(detectedLanguage! in translation_strings)) {
    detectedLanguage = "en";
}

export default function App() {
    const [currentLanguage, setCurrentLanguage] = useState<string>(detectedLanguage!);
    const [currentTranslations, setCurrentTranslations] = useState(
        translation_strings[detectedLanguage!]
    );

    const value = useMemo(
        () => ({
            language: detectedLanguage!,
            translations: (str: string) =>
                currentTranslations[str] ||
                translation_strings["en"][str] ||
                "MISSING TRANSLATIONS OMG!!!!",
            setLanguage: (lang: string) => {
                setCurrentLanguage(lang);
                setCurrentTranslations(translation_strings[lang]);
                localStorage.setItem("language", lang);
            },
        }),
        [{ translations: currentTranslations }]
    );
    const app_ctxt = useMemo(() => ({}), []);

    return (
        <AppProvider>
            <Helmet prioritizeSeoTags>
                <html lang={currentLanguage} />
                <meta name="description" content="SenpaiSilver: VTuber, Otaku & Gunpla Addict" />
                <link rel="canonical" href="https://senpaisilver.com/" />
            </Helmet>
            <main>
                <LanguageContext.Provider value={value as LanguageContextProps}>
                    <Menu />
                    <Outlet />
                </LanguageContext.Provider>
            </main>
        </AppProvider>
    );
}
