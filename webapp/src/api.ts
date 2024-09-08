import { useQuery } from "@tanstack/react-query";

async function simpleGet(url: string) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export type TwitchStatusResponse = {
    broadcaster_id: string;
    broadcaster_language: string;
    broadcaster_login: string;
    broadcaster_name: string;
    content_classification_labels: [];
    delay: number;
    game_id: string;
    game_name: string;
    is_branded_content: boolean;
    stream: {
        game_id: string | null;
        game_name: string | null;
        is_live: boolean;
        is_mature: boolean;
        language: string | null;
        started_at: string | null;
        tags: string[];
        thumbnail_url: string | null;
        viewer_count: number;
    };
    tags: string[];
    title: string;
};

export function TwitchStatusQuery() {
    return useQuery<TwitchStatusResponse>({
        queryKey: ["twitch", "status"],
        queryFn: () => simpleGet("/api/twitch/status"),
        refetchInterval: 5 * (60 * 1000),
    });
}
