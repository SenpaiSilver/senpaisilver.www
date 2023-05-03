// https://discord.com/api/guilds/521167506183028749/widget.json

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../Utility/Icon";
import { queryWidget } from "./api";

interface DiscordMembersProps {
    guild: string;
}

export default function DiscordMembers({ guild }: DiscordMembersProps) {
    const [members, setMembers] = useState<number>();
    const [inviteLink, setInviteLink] = useState<string>();

    useEffect(() => {
        (async () => {
            const widget = await queryWidget(guild);

            setInviteLink(widget.instant_invite);
            setMembers(widget.presence_count);
        })();
    }, []);

    if (!inviteLink) return <></>;
    return (
        <Link to={inviteLink}>
            Discord {members}
            <Icon icon="user" />
        </Link>
    );
}
