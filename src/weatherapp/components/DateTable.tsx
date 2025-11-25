import {Box, Flex, Text, Tabs} from "@radix-ui/themes";

const DateTable = () => {
    return (
        <>
            <footer>
               <div className="h-35 mx-2">
                   <Flex direction="column" >
                       <Tabs.Root defaultValue="daily">
                           <Tabs.List size="2" wrap="nowrap" color="indigo" className="gap-4">
                               <Tabs.Trigger value="daily">Daily</Tabs.Trigger>
                               <Tabs.Trigger value="weekly">Weekly</Tabs.Trigger>
                               <Tabs.Trigger value="monthly">Monthly</Tabs.Trigger>
                           </Tabs.List>
                           <Box className="mt-2">
                               <Tabs.Content value="daily">
                                   <Text size="2">Make changes to your account.</Text>
                               </Tabs.Content>
                               <Tabs.Content value="weekly">
                                   <Text size="2">Access and update your documents.</Text>
                               </Tabs.Content>

                               <Tabs.Content value="monthly">
                                   <Text size="2">Edit your profile or update contact information.</Text>
                               </Tabs.Content>
                           </Box>
                       </Tabs.Root>
                   </Flex>
               </div>
            </footer>
        </>
    )
}

export default DateTable;