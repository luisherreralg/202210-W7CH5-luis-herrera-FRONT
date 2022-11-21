import { AppRoutes } from '../routes/app.routes';
import './app.css';

export function App() {
    return (
        <>
            <main className="bg-slate-900 text-gray-200 flex flex-col items-center font-mono">
                <AppRoutes></AppRoutes>
            </main>
        </>
    );
}
