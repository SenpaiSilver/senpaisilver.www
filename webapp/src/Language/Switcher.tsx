import { useContext } from "react";
import { LanguageContext } from "./locale";
import "./index.scss";

interface LanguageSwitcherProps {
    languages: { [code: string]: string };
}

export function LanguageSwitcher({ languages }: LanguageSwitcherProps) {
    const language = useContext(LanguageContext);

    function onChange(value: any) {
        language.setLanguage(value.target.value);
    }

    return (
        <select className="LanguageSwitcher" defaultValue={language.language} onChange={onChange}>
            {Object.entries(languages).map(([code, lang]) => (
                <option key={code} value={code}>
                    {lang}
                </option>
            ))}
        </select>
    );
}
