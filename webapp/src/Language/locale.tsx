import { createContext } from "react";

export interface Translation {
    [code: string]: any;
}

export const translation_strings: Translation = {};

export const LanguageContext = createContext({
    language: "en",
    translations: (lang: string): string => "",
    setLanguage: (lang: string) => {},
});
