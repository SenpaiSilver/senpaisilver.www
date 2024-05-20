import { useEffect } from "react";

// Switch to a mutation
export default function Twitch() {
    useEffect(() => {
        fetch("/api/twitch/status").then(async (response) => {
            const status = await response.json();
            console.log(status);
        });
    }, []);
    return <></>;
}
