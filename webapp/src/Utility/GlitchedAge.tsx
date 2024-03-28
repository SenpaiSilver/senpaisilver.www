import { useEffect, useState } from "react";
import "./GlitchedAge.scss";
import { DateTime } from "luxon";

const joined_youtube_since = DateTime.utc().diff(
    DateTime.fromISO("2006-07-25T06:06:06Z"),
    "years"
).years;

export default function GlitchedAge() {
    const [age, setAge] = useState(joined_youtube_since);

    useEffect(() => {
        const interval = setInterval(() => {
            let rand_age = (Math.random() * 100) % 100;
            if (rand_age <= joined_youtube_since) {
                rand_age += joined_youtube_since;
            }
            setAge(rand_age);
        }, 200);
        return () => clearInterval(interval);
    }, []);

    return <code className="GlitchedAge">{age.toFixed(2)}</code>;
}
