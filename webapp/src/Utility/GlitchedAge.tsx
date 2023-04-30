import { useEffect, useState } from "react";
import "./GlitchedAge.scss";

export default function GlitchedAge() {
    const [age, setAge] = useState(77.7);

    useEffect(() => {
        const interval = setInterval(() => {
            let rand_age = Math.random() * 100;
            setAge(rand_age > 100 ? rand_age - 100 : rand_age);
        }, 666);
        return () => clearInterval(interval);
    }, []);

    return <code className="GlitchedAge">{age.toFixed(2)}</code>;
}
