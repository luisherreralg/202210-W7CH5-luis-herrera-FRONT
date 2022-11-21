import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div
                className="h-screen flex flex-col
            items-center justify-center"
            >
                <h3 className="text-6xl m-32">Wellcome!</h3>
                <h4 className="p-10">Do you want to login or register?</h4>
                <div className="flex flex-col gap-5">
                    <Link to="/login">
                        <button className="bg-gray-500 w-56 h-12 rounded-lg  hover:bg-zinc-900">
                            LOGIN
                        </button>
                    </Link>
                    <button className="bg-gray-500 w-56 h-12 rounded-lg  hover:bg-zinc-900">
                        REGISTER
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;
