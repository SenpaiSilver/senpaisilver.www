import { ReactNode, createContext } from "react";

const initialState = {
    title: "SenpaiSilver:~$>",
    lang: "en",
    favicon: "/favicon.png",
    keywords: "SenpaiSilver, Senpai, Silver, gaming, blog, code, VTuber",
    description: "SenpaiSilver: VTuber, Otaku & Gunpla Addict",

    og_site_name: "SenpaiSilver",
    og_title: "SenpaiSilver 💾 FR/EN VTuber // Otaku&CodeMonkey",
    og_type: "website",
    og_image: "https://senpaisilver.com/banner.png",
};

export const AppContext = createContext(initialState);

interface AppProviderProps {
    children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
    return <AppContext.Provider value={initialState}>{children}</AppContext.Provider>;
}
