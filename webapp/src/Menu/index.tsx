import React, { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "../Language/Switcher";
import { LanguageContext } from "../Language/locale";
import "./index.scss";
import DiscordMembers from "../Discord/DiscordMembers";
import MenuIcon from "../assets/menu.svg";

interface NavLink {
    title: string | ReactNode;
    href: string;
}

export default function Menu() {
    const locale = useContext(LanguageContext);
    const languages = { fr: "Français", en: "English" };
    const links: NavLink[] = [
        { title: locale.translations("about_me"), href: "/" },
        { title: locale.translations("menu_clipping"), href: "/clipping" },
        { title: "Twitch", href: "https://twitch.tv/senpaisilver" },
        { title: "YouTube", href: "https://youtube.com/@SenpaiSilver" },
        { title: "Bluesky", href: "https://bsky.app/profile/senpaisilver.com" },
        { title: "X (Twitter)", href: "https://x.com/SenpaiSilver" },
        { title: "Blog", href: "https://blog.senpaisilver.com" },
        { title: "Ko-Fi", href: "https://ko-fi.com/senpaisilver" },
        { title: "GitHub", href: "https://github.com/SenpaiSilver" },
    ];

    return (
        <section>
            <nav>
                <BurgerMenu>
                    {links.map((link) => (
                        <Link key={link.href} to={link.href}>
                            {link.title}
                        </Link>
                    ))}
                </BurgerMenu>
                <div className="utility">
                    <DiscordMembers guild="521167506183028749" />
                    <div id="language">
                        <LanguageSwitcher languages={languages} />
                    </div>
                </div>
            </nav>
        </section>
    );
}

interface BurgerMenuProps {
    children: ReactNode;
}

function BurgerMenu({ children }: BurgerMenuProps) {
    return (
        <div>
            <label htmlFor="burger-menu" className="burgermenu">
                <img alt="Menu" src={MenuIcon} />
            </label>
            <input type="checkbox" id="burger-menu" className="burgermenu" />
            <div id="links">{children}</div>
        </div>
    );
}
