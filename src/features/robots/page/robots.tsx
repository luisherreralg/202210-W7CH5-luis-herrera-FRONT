import { AddForm } from '../../../infrastructure/componentes/add.form/add.form';
import { RobotList } from '../../../infrastructure/componentes/robots.list/robots.list';

function Robots() {
    return (
        <>
            <div className="flex justify-center w-1/2 m-10 rounded-2xl">
                <h1 className="text-6xl p-40">Robots</h1>
            </div>
            <RobotList></RobotList>
            <AddForm></AddForm>
        </>
    );
}

export default Robots;
