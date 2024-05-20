import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AppContext } from "../context";
import Twitch from "../Twitch";

export default function Playground() {
    const useAppContext = useContext(AppContext);
    return (
        <>
            <Helmet>
                <link rel="canonical" href="https://senpaisilver.com/playground" />
                <title>P {useAppContext.title}</title>
            </Helmet>
            AAAAAAAAAAAAAAA
            <Twitch />
        </>
    );
}
