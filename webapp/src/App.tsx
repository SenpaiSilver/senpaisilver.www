import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import { useMemo, useState } from "react";
import { LanguageContext, Translation } from "./Language/locale";
import { en_translations } from "./Language/en";
import { fr_translations } from "./Language/fr";

const translation_strings: Translation = { fr: fr_translations, en: en_translations };
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

    return (
        <>
            <main>
                <LanguageContext.Provider value={value as LanguageContextProps}>
                    <Menu />
                    <Outlet />
                </LanguageContext.Provider>
            </main>
        </>
    );
}
