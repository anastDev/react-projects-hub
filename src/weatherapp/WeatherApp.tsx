import Header from "@/weatherapp/components/layout/Header.tsx";
import WeatherContainer from "@/weatherapp/components/layout/WeatherContainer.tsx";

const WeatherApp = () => {
    return (
        <>
        {/*  Header with search field  */}
           <Header/>
        {/*  Main Content  */}
            <WeatherContainer/>
        {/*  Footer: data provided by*/}
        </>
    )
}

export default WeatherApp;