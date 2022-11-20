import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { rootState, rootStore } from '../../store/store';
import { robotReducer } from '../../reducers/robotReducer';
import { RobotList } from './robots.list';

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
            render(
                <Router>
                    <Provider store={mockStore}>
                        <RobotList />
                    </Provider>
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/Robot 1/i);
            expect(element).toBeInTheDocument();
        });
    });
});
