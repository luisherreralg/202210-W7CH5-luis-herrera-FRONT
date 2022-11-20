import { Robot } from '../types/types';
import { createReducer } from '@reduxjs/toolkit';
import * as action from './action.creator';

const initialState: Robot[] = [];

export const robotReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        action.loadActionCreator,
        (_state, action) => action.payload
    );

    builder.addCase(action.addActionCreator, (state, action) => [
        ...state,
        action.payload,
    ]);

    builder.addCase(action.updateActionCreator, (state, action) =>
        state.map((product) =>
            product._id === action.payload._id ? action.payload : product
        )
    );

    builder.addCase(action.deleteActionCreator, (state, action) =>
        state.filter((product) => product._id !== action.payload)
    );

    builder.addDefaultCase((state) => state);
});
