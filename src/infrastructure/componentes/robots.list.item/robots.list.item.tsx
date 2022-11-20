import { Robot } from '../../types/types';

export function RobotListItem({ robot }: { robot: Robot }) {
    return (
        <li key={robot._id}>
            <h3>{robot.name}</h3>
            <img src={robot.image} alt={robot.name} />
            <p>Speed: {robot.speed}</p>
            <p>Endurance: {robot.endurance}</p>
            <p>Creation date: {robot.creationDate}</p>
        </li>
    );
}
