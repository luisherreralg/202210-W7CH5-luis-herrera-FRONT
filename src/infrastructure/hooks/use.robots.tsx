import { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../reducers/action.creator';
import { RobotRepository } from '../services/robot.repository';
import { rootState } from '../store/store';
import { ProtoRobot, Robot } from '../types/types';

export const useRobots = () => {
    const robots = useSelector((state: rootState) => state.robots);
    const dispatcher = useDispatch();
    const apiRobot = useMemo(() => new RobotRepository(), []);

    const handleLoad = useCallback(
        () =>
            apiRobot
                .getAll()
                .then((robots) => dispatcher(action.loadActionCreator(robots)))
                .catch((error: Error) => {
                    console.error(error.name, error.message);
                }),
        [apiRobot, dispatcher]
    );

    const handleAdd = (newRobot: ProtoRobot) => {
        apiRobot
            .create(newRobot)
            .then((robot: Robot) => dispatcher(action.addActionCreator(robot)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (updateRobot: Partial<Robot>) => {
        apiRobot
            .update(updateRobot)
            .then((robot: Robot) =>
                dispatcher(action.updateActionCreator(robot))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (id: string) => {
        apiRobot
            .delete(id)
            .then(() => dispatcher(action.deleteActionCreator(id)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        robots,
        handleLoad,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
