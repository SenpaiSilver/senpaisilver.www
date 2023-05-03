import { Machine } from "./Machine";
import "./index.scss";

export interface ComputerHardware {
    format: "desktop" | "laptop" | "server";
    cpu: string;
    gpu: string;
    ram: number;
    motherboard?: string;
    case?: string;
    storage?: { model: string; storage: number }[];
    os: string;
}

export function Hardware() {
    const machines: Record<string, ComputerHardware> = {
        "BEEF PC": {
            format: "desktop",
            cpu: "AMD Ryzen 9 5900X",
            motherboard: "Asus TUF GAMING X570-PRO",
            gpu: "NVidia RTX 3080Ti",
            ram: 64,
            os: "Windows 10 Pro",
            case: "be quiet! Silent Base 802",
        },
        "Home Server": {
            format: "server",
            cpu: "AMD Ryzen 5 5600G",
            motherboard: "Asus TUF GAMING B550-PLUS",
            gpu: "Radeon™ Graphics 7 cores",
            ram: 16,
            os: "Ubuntu",
            case: "Antec P101",
        },
        Laptop: {
            format: "laptop",
            cpu: "Apple M1 Pro 10 CPU cores",
            gpu: "Apple M1 Pro 16 GPU cores",
            ram: 16,
            os: "Mac OS 13 Ventura",
        },
    };

    return (
        <div className="Hardware">
            {Object.entries(machines).map(([machine_label, specs]) => (
                <div key={machine_label}>
                    <h3>{machine_label}</h3>
                    <Machine machine={specs} />
                </div>
            ))}
        </div>
    );
}
