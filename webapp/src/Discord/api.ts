interface DiscordWidgetResponse {
    id: string;
    name: string;
    instant_invite: string;
    channels: {
        id: string;
        name: string;
        position: number;
    }[];
    members: {
        id: string;
        username: string;
        discriminator: string;
        avatar: null;
        status: string;
        avatar_url: string;
    }[];
    presence_count: number;
}

export async function queryWidget(guild: string): Promise<DiscordWidgetResponse> {
    const response = await fetch(`https://discord.com/api/guilds/${guild}/widget.json`);
    return await response.json();
}
