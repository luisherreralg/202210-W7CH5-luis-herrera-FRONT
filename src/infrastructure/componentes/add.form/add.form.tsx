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
            <div className="flex flex-col bg-gray-800 w-6/12 p-5 items-center my-28">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h2 className="text-2xl">{title}</h2>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Nombre del robot:</label>
                        <input
                            type="text"
                            name="name"
                            aria-label="Name"
                            value={formState.name}
                            onInput={handleInput}
                            required
                            className="w-72 bg-slate-400 rounded-md text-slate-900"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="image">
                            Imagen del robot{'(URL)'}:
                        </label>
                        <input
                            type="text"
                            name="image"
                            aria-label="Image"
                            placeholder="Imagen del robot"
                            value={formState.image}
                            onInput={handleInput}
                            className="w-72 bg-slate-400 rounded-md text-slate-900"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="speed">Velocidad del robot:</label>
                        <input
                            type="number"
                            name="speed"
                            aria-label="Speed"
                            value={formState.speed}
                            onInput={handleInput}
                            required
                            className="w-72 bg-slate-400 rounded-md text-slate-900"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="endurance">
                            Resistencia del robot:
                        </label>
                        <input
                            type="number"
                            name="endurance"
                            aria-label="Endurance"
                            value={formState.endurance}
                            onInput={handleInput}
                            required
                            className="w-72 bg-slate-400 rounded-md text-slate-900"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="creationDate">
                            {' '}
                            Fecha de creación:
                        </label>
                        <input
                            type="date"
                            name="creationDate"
                            aria-label="Creation Date"
                            value={formState.creationDate}
                            onInput={handleInput}
                            required
                            className="w-72 bg-slate-400 rounded-md text-slate-900"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-zinc-700 hover:bg-zinc-900 rounded-lg"
                    >
                        Guardar
                    </button>
                </form>
            </div>
        </>
    );
}
