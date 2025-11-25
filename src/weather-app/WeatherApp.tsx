import SearchField from "@/weather-app/components/SearchField.tsx";
import WeatherContainer from "@/weather-app/components/WeatherContainer.tsx";
import DateTable from "@/weather-app/components/DateTable.tsx";
import {Theme} from "@radix-ui/themes";

const WeatherApp = () => {
    return (
        <>
       <Theme>
           {/*  SearchField with search field  */}
           <SearchField/>
           {/*  Main Content  */}
           <WeatherContainer/>
           {/*  Footer: Table containing dates */}
           <DateTable/>
       </Theme>
        </>
    )
}

export default WeatherApp;