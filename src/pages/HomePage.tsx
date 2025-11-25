import {useEffect} from "react";
import {Link} from "react-router";
import {HoverCardContent, HoverCardTrigger, HoverCard} from "@radix-ui/react-hover-card";

const HomePage = () => {
    const links = [
        {path: "/projects/task-manager-app", label: "Task Manager App", description: "Explanation of the project"},
        {path: "/projects/weather-app", label: "Weather App", description: "Explanation of the project"},
        {path: "/projects/movie-search-app", label: "Movie Search App", description: "Explanation of the project"},
        {path: "/projects/about-me", label: "About Me", description: "Explanation of the project"}

    ]

    useEffect(() => {
        document.title = 'React Project Hub'
    }, []);

    return (
        <>
            <div className="container cursor-default bg-gray-200 w-1/2 mx-auto mt-28 p-8 rounded-lg shadow-md">
                <div className="text-center flex flex-col gap-4 mt-4">
                    <h1 className="text-center text-2xl mb-2">React Project Hub</h1>
                    <p className="text-md">A collection of React projects, built to practice and showcase my knowledge of components, hooks, routing and real-world app structure.</p>
                    {links.map((link) => (
                        <>
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-2 rounded-md"
                                    >
                                        {link.label}
                                    </Link>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-60 bg-gray-200 border shadow-lg rounded-md"
                                                  side="left" sideOffset={5} alignOffset={-10} avoidCollisions={true} >
                                    <div className="flex flex-col justify-items-start gap-4 p-4 ">
                                        <h4 className="text-sm font-medium"> {link.label}</h4>
                                        <p className="text-sm">
                                            {/* Add description of the project, with properties */}
                                            {link.description}
                                        </p>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </>
                    ))}
                </div>
            </div>

        </>
    )
}

export default HomePage;