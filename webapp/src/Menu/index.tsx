import React from 'react';
import { Link } from "react-router-dom";
import "./index.scss";

interface NavLink {
    title: string;
    href: string;
}

export default function Menu() {
    const links: NavLink[] = [
        { title: "About me", href: "/" },
        { title: "Blog", href: "https://blog.senpaisilver.com" },
        { title: "Twitter", href: "https://twitter.com/SenpaiSilver" },
        { title: "YouTube", href: "https://youtube.com/@SenpaiSilver" },
        { title: "Twitch", href: "https://twitch.tv/senpaisilver" },
        { title: "Ko-fi", href: "https://ko-fi.com/senpaisilver" },
        { title: "GitHub", href: "https://github.com/SenpaiSilver" },
    ];

    return <nav>
        {links.map((link) =>
            <Link key={link.href} to={link.href}>{link.title}</Link>
        )}
    </nav>;
}
