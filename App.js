import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Button, View } from "react-native";

import ARStoreFront from "./components/ARStoreFront";
import Summarizer from "./components/Summarizer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Store">
        <Drawer.Screen name="Store" component={ARStoreFront} />
        <Drawer.Screen name="NLP s" component={Summarizer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
