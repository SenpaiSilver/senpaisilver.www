import React from 'react';
import { Link } from "react-router-dom";
import "./index.scss";

interface NavLink {
    title: string;
    href: string;
}

export default function Menu() {
    const links: NavLink[] = [
        { title: "About me", href: "aboutme" },
        { title: "Blog", href: "https://blog.senpaisilver.com" },
        { title: "YouTube", href: "https://youtube.com/@SenpaiSilver" },
        { title: "Twitter", href: "https://twitter.com/SenpaiSilver" },
        { title: "Twitch", href: "https://twitch.tv/senpaisilver" },
        { title: "GitHub", href: "https://github.com/SenpaiSilver" },
        { title: "Ko-fi", href: "https://ko-fi.com/senpaisilver" },
    ];

    return <nav>
        {links.map((link) =>
            <Link to={link.href}>{link.title}</Link>
        )}
    </nav>;
}
