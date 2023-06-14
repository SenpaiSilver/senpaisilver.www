interface DiscordWidgetProps {
    guild: string;
    theme?: "dark" | "light";
}

export default function DiscordWidget({ guild, theme }: DiscordWidgetProps) {
    return (
        <iframe
            src={`https://discord.com/widget?id=${guild}&theme=${theme || "dark"}`}
            width="350"
            height="500"
            allowTransparency={true}
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
    );
}
