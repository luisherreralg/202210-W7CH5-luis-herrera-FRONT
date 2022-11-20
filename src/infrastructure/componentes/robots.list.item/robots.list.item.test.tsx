import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { rootState, rootStore } from '../../store/store';
import { robotReducer } from '../../reducers/robotReducer';
import { RobotListItem } from './robots.list.item';

describe('Given RobotList component', () => {
    const preloadedState: rootState = {
        robots: [
            {
                _id: '1',
                name: 'Robot 1',
                image: 'https://robohash.org/1',
                speed: 1,
                endurance: 1,
                creationDate: '2021-01-01',
                __v: 0,
            },
        ],
    };
    const mockStore: rootStore = configureStore({
        reducer: {
            robots: robotReducer,
        },
        preloadedState,
    });

    describe('When we render the component', () => {
        beforeEach(() => {
            const mockRobot = {
                _id: '1',
                name: 'Robot 1',
                image: 'https://robohash.org/1',
                speed: 1,
                endurance: 1,
                creationDate: '2021-01-01',
                __v: 0,
            };

            render(
                <Router>
                    <Provider store={mockStore}>
                        <RobotListItem robot={mockRobot} />
                    </Provider>
                </Router>
            );
        });
        test('Then it should display the robot name', () => {
            const element = screen.getByText(/Robot 1/i);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display the robot image', () => {
            const element = screen.getByAltText(/Robot 1/i);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display the robot speed', () => {
            const element = screen.getByText(/Speed: 1/i);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display the robot endurance', () => {
            const element = screen.getByText(/Endurance: 1/i);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display the robot creation date', () => {
            const element = screen.getByText(/Creation date: 2021-01-01/i);
            expect(element).toBeInTheDocument();
        });
    });
});
