import {Box, Flex, Text, Tabs} from "@radix-ui/themes";
import {CloudDrizzle, CloudLightning, CloudRain, CloudSnow, CloudSun, Cloudy, Sun} from "lucide-react";

const DateTable = () => {
    const dates = [
        {day: "Monday", icon: <Sun size={25} className="my-2 text-yellow-400"/>, date: "30.11"},
        {day: "Tuesday", icon: <Cloudy size={25} className="my-2 text-gray-500"/>, date: "01.12"},
        {day: "Wednesday", icon: <CloudDrizzle size={25} className="my-2 text-gray-400"/>, date: "02.12"},
        {day: "Thursday", icon: <CloudLightning size={25} className="my-2 text-slate-400"/>, date: "03.12"},
        {day: "Friday", icon: <CloudSun size={25} className="my-2 text-yellow-600"/>, date: "04.12"},
        {day: "Saturday",icon: <CloudRain size={25} className="my-2 text-gray-400"/>, date: "05.12"},
        {day: "Sunday", icon: <CloudSnow size={25} className="my-2 text-slate-400"/>, date: "06.12"},
    ];

    return (
        <>
            <footer>
               <Flex className="h-40 my-2">
                   <Tabs.Root defaultValue="daily" className="w-full">
                       <Tabs.List size="2" color="indigo" className="gap-4 w-full">
                           <Tabs.Trigger value="daily">Daily</Tabs.Trigger>
                           <Tabs.Trigger value="weekly">Weekly</Tabs.Trigger>
                           <Tabs.Trigger value="monthly">Monthly</Tabs.Trigger>
                       </Tabs.List>
                       <Box p="2">
                           <Tabs.Content value="daily">
                               <Flex direction="row" justify="between" >
                                   {dates.map((date, index) => (
                                       <Box key={index} className="border border-black p-2 text-center">
                                           <Flex direction="column" align="center" justify="center" gap="1">
                                               <Text className="font-semibold">{date.day}</Text>
                                               <Box>{date.icon}</Box>
                                               <Text className="font-medium">{date.date}</Text>
                                           </Flex>
                                       </Box>
                                   ))}
                               </Flex>
                           </Tabs.Content>
                           <Tabs.Content value="weekly">
                               <Flex direction="row" justify="between" >
                                   {dates.map((date, index) => (
                                       <Box key={index} className="border border-black p-2 text-center">
                                           <Flex direction="column" align="center" justify="center" gap="1">
                                               <Text className="font-semibold">{date.day}</Text>
                                               <Box>{date.icon}</Box>
                                               <Text className="font-medium">{date.date}</Text>
                                           </Flex>
                                       </Box>
                                   ))}
                               </Flex>
                           </Tabs.Content>
                           <Tabs.Content value="monthly">
                               <Flex direction="row" justify="between" >
                                   {dates.map((date, index) => (
                                       <Box key={index} className="border border-black p-2 text-center">
                                           <Flex direction="column" align="center" justify="center" gap="1">
                                               <Text className="font-semibold">{date.day}</Text>
                                               <Box>{date.icon}</Box>
                                               <Text className="font-medium">{date.date}</Text>
                                           </Flex>
                                       </Box>
                                   ))}
                               </Flex>
                           </Tabs.Content>
                       </Box>
                   </Tabs.Root>
               </Flex>
            </footer>
        </>
    )
}

export default DateTable;