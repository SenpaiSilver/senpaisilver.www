import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import fr_translation from "./Language/fr.json";
import en_translation from "./Language/en.json";
import { useMemo, useState } from "react";
import { LanguageContext } from "./Language/locale";

interface Translation {
    [code: string]: any; //{[key: string]: string}
}

interface LanguageContextProps {
    language: string;
    translations: any;
    setLanguage: (lang: string) => void;
}

export default function App() {
    const [currentLanguage, setCurrentLanguage] = useState<string>("en");
    const translation_strings: Translation = { fr: fr_translation, en: en_translation };
    const [currentTranslations, setCurrentTranslations] = useState(translation_strings["en"]);

    let detectedLanguage = localStorage.getItem("language");

    if (!detectedLanguage) {
        detectedLanguage = navigator.language.split("-").at(0) || "en";
    }

    const value = useMemo(
        () => ({
            language: detectedLanguage!,
            translations: (str: string) =>
                currentTranslations[str] || translation_strings["en"][str],
            // translations: currentTranslations,
            setLanguage: (lang: string) => {
                console.log("changing to:", lang);
                setCurrentLanguage(lang);
                setCurrentTranslations(translation_strings[lang]);
            },
        }),
        // []
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
