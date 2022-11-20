import { Robot } from '../../types/types';
import { ButtonDelete } from '../buttons/button.delete/button.delete';

export function RobotListItem({ robot }: { robot: Robot }) {
    return (
        <li key={robot._id}>
            <h3>{robot.name}</h3>
            <img src={robot.image} alt={robot.name} />
            <p>Speed: {robot.speed}</p>
            <p>Endurance: {robot.endurance}</p>
            <p>Creation date: {robot.creationDate}</p>
            <ButtonDelete id={robot._id}></ButtonDelete>
        </li>
    );
}
