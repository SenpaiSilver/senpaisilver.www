import React from 'react';

import './css/Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.links = [
            {"title": "Blog",    "href": "https://blog.senpaisilver.com"},
            {"title": "Twitter", "href": "https://twitter.com/SenpaiSilve"},
            {"title": "YouTube", "href": "https://youtube.com/SenpaiSilver"},
            {"title": "GitHub",  "href": "https://github.com/SenpaiSilver"},
            {"title": "Steam",   "href": "http://steamcommunity.com/id/senpaisilver/"},
        ];
    }

    render() {
        return (
            <header>
                <a href="/">SenpaiSilver$~&gt;</a>
                <nav>
                    <ul>
                        {this.links.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>
                                <span className="icon newspaper"></span> {item.title}
                            </a>
                        </li>
                        ))}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;