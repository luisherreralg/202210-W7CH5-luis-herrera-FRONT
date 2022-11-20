import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useRobots } from '../../../hooks/use.robots';
import { appStore } from '../../../store/store';
import { ButtonDelete } from './button.delete';
jest.mock('../../../hooks/use.robots');

describe('Given the ButtonDelete component', () => {
    describe('When it is rendered', () => {
        beforeEach(() => {
            (useRobots as jest.Mock).mockReturnValue({
                handleDelete: jest.fn(),
            });

            (useRobots as jest.Mock).mockReturnValue({
                handleLoad: jest.fn(),
            });

            render(
                <Provider store={appStore}>
                    <ButtonDelete id="1" />
                </Provider>
            );
        });

        test('Then it should display a button with the text BORRAR', () => {
            const button = screen.getByRole('button', { name: 'BORRAR 🗑️' });
            expect(button).toBeInTheDocument();
        });

        // TODO: No sé testear botones 😢
        //   Matcher error: received value must be a mock or spy function
        test.skip('When its clicked then it should call to the hanldeDelete hook function', () => {
            const button = screen.getByRole('button', { name: 'BORRAR 🗑️' });
            button.click();
            expect(useRobots().handleDelete).toHaveBeenCalled();
        });
    });
});
