import { createContext } from "react";
import fr_translation from "../Language/fr.json";
import en_translation from "../Language/en.json";

interface Translation {
    [code: string]: any;
}

const translation_strings: Translation = { fr: fr_translation, en: en_translation };

export const LanguageContext = createContext({
    language: "en",
    translations: (lang: string): string => "",
    setLanguage: (lang: string) => {},
});
