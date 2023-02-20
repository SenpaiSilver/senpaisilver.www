import { Outlet } from "react-router-dom";
import Menu from "./Menu";

export default function App() {
    return (
        <>
            <Menu />
            <main>
                <Outlet />
            </main>
        </>
    );
}
