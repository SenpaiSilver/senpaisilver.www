import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import { useMemo, useState } from "react";
import { LanguageContext, Translation } from "./Language/locale";
import { en_translations } from "./Language/en";
import { fr_translations } from "./Language/fr";

interface LanguageContextProps {
    language: string;
    translations: any;
    setLanguage: (lang: string) => void;
}

export default function App() {
    const translation_strings: Translation = { fr: fr_translations, en: en_translations };
    const [currentLanguage, setCurrentLanguage] = useState<string>("en");
    const [currentTranslations, setCurrentTranslations] = useState(translation_strings["en"]);

    let detectedLanguage = localStorage.getItem("language");

    if (!detectedLanguage) {
        detectedLanguage = navigator.language.split("-").at(0) || "en";
    }

    const value = useMemo(
        () => ({
            language: detectedLanguage!,
            translations: (str: string) =>
                currentTranslations[str] ||
                translation_strings["en"][str] ||
                "MISSING TRANSLATIONS OMG",
            setLanguage: (lang: string) => {
                console.log("changing to:", lang);
                setCurrentLanguage(lang);
                setCurrentTranslations(translation_strings[lang]);
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
