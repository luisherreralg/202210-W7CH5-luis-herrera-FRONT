import { Robot } from '../types/types';
import { actionTypes } from './action.types';
import { robotReducer } from './robotReducer';

describe('Given the robotReducer component', () => {
    const robotMock: Robot = {
        _id: '1',
        name: 'name',
        image: 'image',
        speed: 1,
        endurance: 1,
        creationDate: '2021-01-01',
        __v: 1,
    };

    let action: { type: string; payload: unknown };
    let state: Robot[];

    describe('When it receives a load action', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.load,
                payload: [robotMock],
            };
            state = [];
        });

        test('Then it should return the payload', () => {
            const result = robotReducer(state, action);

            expect(result).toEqual([robotMock]);
        });
    });

    describe('When it receives an add action', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.add,
                payload: robotMock,
            };
            state = [];
        });

        test('Then it should return the payload', () => {
            const result = robotReducer(state, action);

            expect(result).toEqual([robotMock]);
        });
    });

    describe('When it receives an update action', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: robotMock,
            };
            state = [robotMock];
        });

        test('Then it should return the payload', () => {
            const result = robotReducer(state, action);

            expect(result).toEqual([robotMock]);
        });
    });

    describe('When it receives a update action and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...robotMock, _id: '2', name: 'Update task' },
            };
            state = [robotMock];
        });

        test('Then the returned state should be the original state', () => {
            const result = robotReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When it receives a delete action', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: robotMock._id,
            };
            state = [robotMock];
        });

        test('Then it should return the payload', () => {
            const result = robotReducer(state, action);

            expect(result).toEqual([]);
        });
    });

    describe('When it receives an unknown action', () => {
        beforeEach(() => {
            action = {
                type: 'unknown',
                payload: robotMock,
            };
            state = [robotMock];
        });

        test('Then it should return the state', () => {
            const result = robotReducer(state, action);

            expect(result).toEqual([robotMock]);
        });
    });
});
