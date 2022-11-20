import { SyntheticEvent } from 'react';
import { useRobots } from '../../../hooks/use.robots';

export function ButtonDelete({ id }: { id: string }) {
    const { handleDelete, handleLoad } = useRobots();

    const handleDeleteClick = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleDelete(id);
        handleLoad();
    };

    return (
        <button
            className="bg-zinc-700 hover:bg-zinc-900 rounded-lg"
            onClick={handleDeleteClick}
        >
            BORRAR 🗑️
        </button>
    );
}
