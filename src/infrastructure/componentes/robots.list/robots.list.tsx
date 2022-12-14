import { useEffect } from 'react';
import { useRobots } from '../../hooks/use.robots';
import { RobotListItem } from '../robots.list.item/robots.list.item';

export function RobotList() {
    const { robots, handleLoad } = useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);
    return (
        <div className="flex flex-wrap gap-14 m-10 justify-center">
            {robots.map((robot) => (
                <ul key={robot._id}>
                    <RobotListItem robot={robot}></RobotListItem>
                </ul>
            ))}
        </div>
    );
}
