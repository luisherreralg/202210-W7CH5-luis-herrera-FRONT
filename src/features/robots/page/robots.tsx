import { AddForm } from '../../../infrastructure/componentes/add.form/add.form';
import { RobotList } from '../../../infrastructure/componentes/robots.list/robots.list';

function Robots() {
    if (!localStorage.getItem('token')) {
        window.location.href = '/login';
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <>
            <div className="flex justify-center w-1/2 m-10 rounded-2xl">
                <h1 className="text-6xl p-40">Robots</h1>
            </div>
            <button
                className="bg-violet-900 w-36 h-14 rounded-full hover:bg-gray-400"
                onClick={handleLogout}
            >
                LOGOUT
            </button>
            <RobotList></RobotList>
            <AddForm></AddForm>
        </>
    );
}

export default Robots;
