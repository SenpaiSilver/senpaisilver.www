import { ReactNode, ReactPortal, createContext } from "react";

export type Translation = {
    [code: string]: ReactNode;
};

export const translation_strings: Translation = {};

export const LanguageContext = createContext({
    language: "en",
    translations: (lang: string): string => "",
    setLanguage: (lang: string) => {},
});
