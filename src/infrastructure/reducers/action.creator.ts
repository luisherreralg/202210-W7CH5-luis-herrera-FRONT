import { createAction } from '@reduxjs/toolkit';
import { Robot } from '../types/types';
import { actionTypes } from './action.types';

export const loadActionCreator = createAction<Robot[]>(actionTypes.load);

export const addActionCreator = createAction<Robot>(actionTypes.add);

export const deleteActionCreator = createAction<Robot['_id']>(
    actionTypes.delete
);

export const updateActionCreator = createAction<Robot>(actionTypes.update);
