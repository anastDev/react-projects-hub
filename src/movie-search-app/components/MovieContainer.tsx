import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";

const MovieContainer = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <div className="md:container mx-auto my-8 flex md:flex-col max-h-screen">
                <div className="p-6 bg-indigo-200 shadow-md rounded-md ">
                    <div className="flex flex-wrap flex-row space-x-4">
                        <div>
                            <img
                                className="md:max-w-xs rounded-lg"
                                src="https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg"
                                alt="Image of the movie"/>
                        </div>
                        <div className="flex flex-1 flex-col md:flex-row flex-wrap relative">
                            <div className="flex flex-col space-y-4">
                                <h1 id="movie-title" className="text-3xl font-bold">Inside Out (2015)</h1>
                                <div>
                                    <span className="font-semibold">Plot:</span>
                                    <p>
                                        After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions — Joy,
                                        Fear, Anger, Disgust, and Sadness — conflict on how best to navigate a new city, house, and school.
                                    </p>
                                </div>
                                <div className="absolute bottom-0">
                                    <ul className="space-y-2">
                                        <li> <span className="font-semibold">Genre:</span> Animation, Adventure, Comedy</li>
                                        <li><span className="font-semibold">Duration:</span> 95 min</li>
                                        <li><span className="font-semibold">Released:</span> 19 Jun 2015</li>
                                        <li><span className="font-semibold">IMDB:</span> 8.1/10</li>
                                        <li><span className="font-semibold">Rotten Tomatoes:</span> 98%</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* More Movie info */}
                    {isVisible && (
                        <div>
                            <ul className="mt-4 space-y-2">
                                <li> <span className="font-semibold">Director:</span> Pete Docter, Ronnie Del Carmen</li>
                                <li><span className="font-semibold">Writer:</span>Pete Docter, Ronnie Del Carmen, Meg LeFauve</li>
                                <li><span className="font-semibold">Actors:</span> Amy Poehler, Phyllis Smith, Richard Kind</li>
                                <li><span className="font-semibold">Language:</span> English</li>
                                <li><span className="font-semibold">Country:</span> United States</li>
                            </ul>
                        </div>
                    )}
                    <div className="flex flex-row justify-start space-x-4 mt-4">
                        <Button variant="outline" onClick={()=> setIsVisible(!isVisible)}>
                            More Details
                        </Button>
                        <Button variant="outline">
                            Clear Search
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieContainer;