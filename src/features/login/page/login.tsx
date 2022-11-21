import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <div
                className="h-screen flex flex-col
            items-center justify-center"
            >
                <h3 className="text-6xl m-32">Login</h3>
                <div className="flex flex-col gap-10">
                    <form className="flex flex-col gap-5 ">
                        <label className="text-2xl">Name</label>
                        <input
                            className="bg-gray-500 w-72 h-12 rounded-lg  hover:bg-zinc-900"
                            type="text"
                            required
                        />
                        <label className="text-2xl">Password</label>
                        <input
                            className="bg-gray-500 w-72 h-12 rounded-lg  hover:bg-zinc-900"
                            type="password"
                            required
                        />
                    </form>
                    <Link to="/robots">
                        <button className="bg-gray-500 w-72 h-12 rounded-lg  hover:bg-zinc-900">
                            LOGIN
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default Login;
