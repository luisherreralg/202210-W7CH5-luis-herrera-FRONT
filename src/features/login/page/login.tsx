import { SyntheticEvent, useState } from 'react';
import { UserRepository } from '../../../infrastructure/services/login.repository';

function Login() {
    const userServices = new UserRepository();

    if (localStorage.getItem('token')) {
        window.location.href = '/robots';
    }

    const initialState = {
        name: '',
        passwd: '',
    };
    const [formState, setFormState] = useState(initialState);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    const handleClick = async (ev: SyntheticEvent) => {
        ev.preventDefault();

        console.log(formState);
        const user = await userServices.login(formState);

        setFormState(initialState);
        if (user) {
            window.location.href = '/robots';
            localStorage.setItem('token', user.token);
        }
    };

    return (
        <>
            <div
                className="h-screen flex flex-col
            items-center justify-center"
            >
                <h3 className="text-6xl m-20">Login</h3>
                <div className="bg-gray-800 p-10 rounded-2xl my-10 border-yellow-500 border-2 border-dashed shadow-2xl">
                    <p className="p-1 text-center">PLACEHOLDER</p>
                    <p>Name: Luis</p>
                    <p>Password: 12345</p>
                    <p>O usa postman para hacer un register</p>
                </div>
                <div className="flex flex-col gap-10">
                    <form className="flex flex-col gap-5">
                        <label className="text-2xl">Name</label>
                        <input
                            className="bg-gray-500 w-72 h-12 rounded-lg  hover:bg-zinc-900"
                            type="text"
                            name="name"
                            aria-label="Name"
                            value={formState.name}
                            onInput={handleInput}
                            required
                        />
                        <label className="text-2xl">Password</label>
                        <input
                            className="bg-gray-500 w-72 h-12 rounded-lg  hover:bg-zinc-900"
                            type="password"
                            name="passwd"
                            aria-label="Password"
                            value={formState.passwd}
                            onInput={handleInput}
                            required
                        />
                    </form>
                    <button
                        className="bg-gray-500 w-72 h-12 rounded-lg  hover:bg-zinc-900"
                        onClick={handleClick}
                    >
                        LOGIN
                    </button>
                </div>
            </div>
        </>
    );
}

export default Login;
