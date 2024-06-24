import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WeightScreen from "../screens/WeightScreen";

/* Katya - 
  the weight screen will only use one stack as far as i understand,
  so i don't know if we need this and stuff :P. I still did it to make
  the upper labels consistent.
*/


const WeightStack = createNativeStackNavigator();

export default function WeightStackNavigator() {
  return (
    <WeightStack.Navigator>
      <WeightStack.Screen name="Weights" component={WeightScreen} />
    </WeightStack.Navigator>
);
}