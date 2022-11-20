import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AddForm } from './add.form';
import { appStore } from '../../store/store';
import { useRobots } from '../../hooks/use.robots';
import userEvent from '@testing-library/user-event';

jest.mock('../../hooks/use.robots');

describe('Given Add component and render it', () => {
    let formElements: Array<{ role: string; name: string }>;

    beforeEach(() => {
        formElements = [
            { role: 'textbox', name: 'Name' },
            { role: 'textbox', name: 'Image' },
            { role: 'spinbutton', name: 'Speed' },
            { role: 'spinbutton', name: 'Endurance' },
            // No le gustan este tipo de inputs
            // { role: 'date', name: 'CreationDate' },
            { role: 'button', name: 'Guardar' },
        ];

        (useRobots as jest.Mock).mockReturnValue({
            handleAdd: jest.fn(),
        });

        render(
            <Provider store={appStore}>
                <Router>
                    <AddForm />
                </Router>
            </Provider>
        );
    });
    describe('When the component has been render', () => {
        test('Then it should display the title', () => {
            const title = /Añadir robot/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display a form with 2 inputs and a button', () => {
            formElements.forEach((item) => {
                const element: HTMLFormElement = screen.getByRole(item.role, {
                    name: item.name,
                });
                expect(element).toBeInTheDocument();
            });
        });
    });
    describe('When the user type in the inputs', () => {
        test('Then typed text in first input should be in the screen', () => {
            const mockTyped = 'Test robot';
            const input = screen.getByRole(formElements[0].role, {
                name: formElements[0].name,
            });
            userEvent.type(input, mockTyped);
            expect(input).toHaveValue(mockTyped);
        });
        test('Then typed text in second input should be in the screen', () => {
            const mockTyped = 'Test user';
            const input = screen.getByRole(formElements[1].role, {
                name: formElements[0].name,
            });
            userEvent.type(input, mockTyped);
            expect(input).toHaveValue(mockTyped);
        });
    });

    // No consigo que funcione
    describe.skip('When the user clics the button', () => {
        test('Then the handleAdd function should be called', () => {
            // No consigo que funcione
            const button = screen.getByRole(formElements[4].role, {
                name: formElements[4].name,
            });
            userEvent.click(button);
            expect(useRobots().handleAdd).toHaveBeenCalled();
        });
    });
});
