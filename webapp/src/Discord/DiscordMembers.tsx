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

    if (!inviteLink || !members) return <></>;
    return (
        <Link to={inviteLink}>
            Discord {members > 99 ? "99+" : members}
            <Icon icon="user" />
        </Link>
    );
}
