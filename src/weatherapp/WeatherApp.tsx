import SearchField from "@/weatherapp/components/SearchField.tsx";
import WeatherContainer from "@/weatherapp/components/WeatherContainer.tsx";
import DateTable from "@/weatherapp/components/DateTable.tsx";

const WeatherApp = () => {
    return (
        <>
        {/*  SearchField with search field  */}
           <SearchField/>
        {/*  Main Content  */}
            <WeatherContainer/>
        {/*  Footer: Table containing dates */}
            <DateTable/>
        </>
    )
}

export default WeatherApp;