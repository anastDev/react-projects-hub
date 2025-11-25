import SearchField from "@/weatherapp/components/SearchField.tsx";
import WeatherContainer from "@/weatherapp/components/WeatherContainer.tsx";
import DateTable from "@/weatherapp/components/DateTable.tsx";
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