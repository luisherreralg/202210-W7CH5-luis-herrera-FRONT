import { SyntheticEvent, useState } from 'react';
import { useRobots } from '../../hooks/use.robots';
import { ProtoRobot } from '../../types/types';

type formData = {
    name: string;
    image: string;
    speed: number;
    endurance: number;
    creationDate: string;
};
export function AddForm() {
    const title = 'Añadir Robot';
    const initialState: formData = {
        name: '',
        image: '',
        speed: 0,
        endurance: 0,
        creationDate: '',
    };
    const [formState, setFormState] = useState(initialState);
    const { handleAdd, handleLoad } = useRobots();

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        const newRobot: ProtoRobot = { ...formState };
        handleAdd(newRobot);
        setFormState(initialState);
        handleLoad();

        // TODO: PREGUNTAR ESTO EN CLASE
        // Sin el segundo handleload no carga la info
        handleLoad();
    };

    return (
        <>
            <h2>{title}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="name"
                        aria-label="Name"
                        placeholder="Nombre del robot"
                        value={formState.name}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="image"
                        aria-label="Image"
                        placeholder="Imagen del robot"
                        value={formState.image}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="speed"
                        aria-label="Speed"
                        placeholder="Velocidad del robot"
                        value={formState.speed}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="endurance"
                        aria-label="Endurance"
                        placeholder="Resistencia del robot"
                        value={formState.endurance}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <input
                        type="date"
                        name="creationDate"
                        aria-label="Creation Date"
                        placeholder="Fecha de creación del robot"
                        value={formState.creationDate}
                        onInput={handleInput}
                        required
                    />
                </div>
                <button type="submit">Guardar</button>
            </form>
        </>
    );
}
