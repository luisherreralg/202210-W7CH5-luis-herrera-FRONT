import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { renderHook, waitFor } from '@testing-library/react';
import { ProtoRobot, Robot } from '../types/types';
import { RobotRepository } from '../services/robot.repository';
import { useRobots } from './use.robots';
import { rootState, rootStore } from '../store/store';
import { robotReducer } from '../reducers/robotReducer';

jest.mock('../services/robot.repository');

describe('Given the custom hook useTasks', () => {
    let mockProtoRobot: ProtoRobot;
    let mockRobot: Robot;
    let mockAddedRobot: Robot;
    let mockUpdatedRobot: Robot;

    beforeEach(() => {
        mockProtoRobot = {
            name: 'test',
            speed: 0,
            endurance: 0,
            creationDate: '0',
        };
        mockRobot = {
            ...mockProtoRobot,
            _id: '0',
            __v: 0,
        };
        mockAddedRobot = {
            _id: '2',
            name: 'Added robot',
            speed: 0,
            endurance: 0,
            creationDate: '0',
            __v: 0,
        };
        mockUpdatedRobot = {
            _id: '2',
            name: 'Updated robot',
            speed: 0,
            endurance: 0,
            creationDate: '0',
            __v: 0,
        };
    });
    describe('When we simulate its use in a component', () => {
        interface Current {
            robots: Array<Robot>;
            handleLoad: () => void;
            handleAdd: (newRobot: ProtoRobot) => void;
            handleDelete: (id: Robot['_id']) => void;
            handleUpdate: (updateRobot: Partial<Robot>) => void;
        }

        let current: Current;
        let mockStore: rootStore;

        beforeEach(async () => {
            RobotRepository.prototype.getAll = jest
                .fn()
                .mockResolvedValue([mockRobot]);
            RobotRepository.prototype.create = jest
                .fn()
                .mockResolvedValue(mockAddedRobot);
            RobotRepository.prototype.update = jest
                .fn()
                .mockResolvedValue(mockUpdatedRobot);
            RobotRepository.prototype.delete = jest
                .fn()
                .mockResolvedValue(undefined);

            const preloadedState: rootState = { robots: [] };
            mockStore = configureStore({
                reducer: {
                    robots: robotReducer,
                },
                preloadedState,
            });

            const wrapper = ({ children }: { children: JSX.Element }) => (
                <Provider store={mockStore}>{children}</Provider>
            );
            ({
                result: { current },
            } = renderHook(() => useRobots(), { wrapper }));
        });

        // test('Then the state is accesible by the hook', async () => {
        test(`Then hook call to the repository for the initial data
                and dispatch an action for load the data in the state`, async () => {
            current.handleLoad();
            expect(RobotRepository.prototype.getAll).toHaveBeenCalled();
        });

        test(`Then the hock call to the repository to add a new task 
            and dispatch an action for add the task to the state`, async () => {
            // Datos iniciales definidos en preloadedState
            expect(current.robots).toEqual([]);
            current.handleAdd(mockProtoRobot);
            expect(RobotRepository.prototype.create).toHaveBeenCalled();
        });

        test(`Then the hock call to the repository to update a task
            and dispatch an action for update the task in the state`, async () => {
            // Datos iniciales definidos en preloadedState
            expect(current.robots).toEqual([]);
            current.handleUpdate(mockUpdatedRobot);
            await waitFor(() => {
                expect(RobotRepository.prototype.update).toHaveBeenCalled();
            });
        });

        test(`Then the hock call to the repository to delete a task
            and dispatch an action for delete the task from the state`, async () => {
            // Datos iniciales definidos en preloadedState
            expect(current.robots).toEqual([]);
            current.handleDelete('1');
            await waitFor(() => {
                expect(RobotRepository.prototype.delete).toHaveBeenCalled();
            });
        });
    });
});
