import { AddForm } from '../add.form/add.form';
import { RobotList } from '../robots.list/robots.list';
import './app.css';

export function App() {
    return (
        <>
            <main className="bg-slate-900 text-gray-200 flex flex-col items-center font-mono">
                <div className="flex justify-center w-1/2 m-10 rounded-2xl">
                    <h1 className="text-6xl p-40">Robots</h1>
                </div>
                <RobotList></RobotList>
                <AddForm></AddForm>
            </main>
        </>
    );
}
