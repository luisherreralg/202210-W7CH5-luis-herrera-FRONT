import { Robot } from '../../types/types';
import { ButtonDelete } from '../buttons/button.delete/button.delete';

export function RobotListItem({ robot }: { robot: Robot }) {
    return (
        <li
            key={robot._id}
            className="flex flex-col gap-5 bg-gray-800 rounded-xl p-5 hover:scale-105 transform transition duration-500"
        >
            <h3 className="text-2xl">{robot.name}</h3>
            <img
                className="h-72 w-72 object-cover rounded-xl"
                src={robot.image}
                alt={robot.name}
            />
            <p>Speed: {robot.speed}</p>
            <p>Endurance: {robot.endurance}</p>
            <p>Creation date: {robot.creationDate}</p>
            <ButtonDelete id={robot._id}></ButtonDelete>
        </li>
    );
}
