import {useEffect} from "react";
import {Link} from "react-router";

const HomePage = () => {
    const links = [
        {path: "/", label: "Homepage"},
        {path: "/calculator-app", label: "Calculator App"},
        {path: "/task-manager-app", label: "Task Manager App"},
        {path: "/weather-app", label: "Weather App"},
        {path: "/movie-search-app", label: "Movie Search App"},
        {path: "/about-me", label: "About Me"}

    ]

    useEffect(() => {
        document.title = 'React Project Hub'
    }, []);

    return (
        <>
            <div className="container w-1/2 mx-auto border-2 border-black mt-24 p-8 rounded-lg">
                <h1 className="text-center text-2xl mb-2">React Project Hub</h1>
                <p className="text-md">A collection of React projects, built to practice and showcase my knowledge of components, hooks, routing and real-world app structure.</p>
                <div className="text-center flex flex-col gap-4 mt-4">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className=" bg-gray-800 text-white px-6 py-2 rounded-md"
                        >{link.label}</Link>
                    ))}
                </div>
            </div>

        </>
    )
}

export default HomePage;