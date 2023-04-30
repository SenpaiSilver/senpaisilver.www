import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { LanguageSwitcher } from "../Language/Switcher";
import { LanguageContext } from "../Language/locale";

interface NavLink {
    title: string;
    href: string;
}

export default function Menu() {
    const locale = useContext(LanguageContext);
    const languages = { fr: "Français", en: "English" };
    const links: NavLink[] = [
        { title: locale.translations("about_me"), href: "/" },
        { title: "Blog", href: "https://blog.senpaisilver.com" },
        { title: "Twitter", href: "https://twitter.com/SenpaiSilver" },
        { title: "YouTube", href: "https://youtube.com/@SenpaiSilver" },
        { title: "Twitch", href: "https://twitch.tv/senpaisilver" },
        { title: "Ko-fi", href: "https://ko-fi.com/senpaisilver" },
        { title: "GitHub", href: "https://github.com/SenpaiSilver" },
    ];

    return (
        <nav>
            <div>
                {links.map((link) => (
                    <Link key={link.href} to={link.href}>
                        {link.title}
                    </Link>
                ))}
            </div>
            <LanguageSwitcher languages={languages} />
        </nav>
    );
}
