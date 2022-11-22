import { SyntheticEvent, useState } from 'react';
import { UserRepository } from '../../../infrastructure/services/login.repository';

function Register() {
    const userServices = new UserRepository();

    if (localStorage.getItem('token')) {
        window.location.href = '/robots';
    }

    const initialState = {
        name: '',
        email: '',
        passwd: '',
        role: 'user',
    };
    const [formState, setFormState] = useState(initialState);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    const handleClick = async (ev: SyntheticEvent) => {
        ev.preventDefault();

        console.log(formState);
        await userServices.register(formState);
        const token = await userServices.login({
            name: formState.name,
            passwd: formState.passwd,
        });

        setFormState(initialState);
        if (token) {
            window.location.href = '/robots';
            localStorage.setItem('token', token.token);
        }
    };

    return (
        <>
            <div
                className="h-screen flex flex-col
            items-center justify-center"
            >
                <h3 className="text-6xl m-20">REGISTER</h3>

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
                        <label className="text-2xl">Email</label>
                        <input
                            className="bg-gray-500 w-72 h-12 rounded-lg  hover:bg-zinc-900"
                            type="email"
                            name="email"
                            aria-label="Email"
                            value={formState.email}
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
                        REGISTER
                    </button>
                </div>
            </div>
        </>
    );
}

export default Register;
