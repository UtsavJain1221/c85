import react from 'react';
import {CreateStackNavigator} from "@react-navigation"
import {TabNavigator} from "./TabNavigator";
import {StoryScreen} from "../screens/StoryScreen";

const Stack = CreateStackNavigator();


const StackNavigator = () =>{
return(
    <Stack.Navigator 
    initialRouteName = "Tab"
    screenOptions = {{
        headerShown:false
    }}
    >

<Stack.screen name= "Tab" component={TabNavigator}/>;
 <Stack.screen name= "StoryScreen" component = {StoryScreen}/>;       
    </Stack.Navigator>
);
    
};

export default StackNavigator ;