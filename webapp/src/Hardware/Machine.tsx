import { ComputerHardware } from ".";

interface MachineProps {
    machine: ComputerHardware;
}

export function Machine({ machine }: MachineProps) {
    return (
        <ul>
            <li>
                <label>CPU:</label> <span>{machine.cpu}</span>
            </li>
            <li>
                <label>GPU:</label> <span>{machine.gpu}</span>
            </li>
            <li>
                <label>RAM:</label> <span>{machine.ram}GB</span>
            </li>
            <li>
                <label>OS:</label> <span>{machine.os}</span>
            </li>
            {machine.case && (
                <li>
                    <label>Case:</label> <span>{machine.case}</span>
                </li>
            )}
        </ul>
    );
}
