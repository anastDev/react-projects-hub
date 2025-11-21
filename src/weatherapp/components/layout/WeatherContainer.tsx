const WeatherContainer = () => {
    return (
        <>
            <main>
             <div className="my-4 mx-2">
                 <div className="border border-black md:max-w-xs h-[90vh]">
                     <div className="bg-gray-200 text-center h-72">
                         Picture
                     </div>
                     <div className="mt-18">
                         <div className="text-center h-40">
                             <h1 className="text-5xl mb-2">19 Temp</h1>
                             <p className="text-lg font-light">Mostly Cloudy</p>
                         </div>
                         <hr className="w-48 h-6 mx-auto"/>
                         <div className="flex flex-col text-center mt-8">
                             <div>
                                 21.11.2025
                             </div>
                             <div>
                                 Athens, Greece
                             </div>
                         </div>
                     </div>
                 </div>
             </div>

            </main>
        </>
    )
}

export default WeatherContainer;