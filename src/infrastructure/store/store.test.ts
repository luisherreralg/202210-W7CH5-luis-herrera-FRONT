import { appStore } from './store';

describe('Given the store', () => {
    test('Then it should exist', () => {
        expect(appStore).toHaveProperty('dispatch');
    });
});
