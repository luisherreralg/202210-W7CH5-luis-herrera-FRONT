import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import { Login } from '../../../features/login/page/login';
// import { Robots } from '../../../features/robots/page/robots';

const Home = lazy(() => import('../../../features/home/page/home'));
const Robots = lazy(() => import('../../../features/robots/page/robots'));
const Login = lazy(() => import('../../../features/login/page/login'));

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="/robots" element={<Robots />} />
                <Route path="/login" element={<Login />} />
                <Route path="" element={<Home />} />
                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </Suspense>
    );
}
