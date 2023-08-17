import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import detail from './pages/detail';
import * as Haptics from 'expo-haptics';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: 'HR RN' }}
        />
        <Stack.Screen
          name="detail"

          component={detail}
          listeners={
            () => {
              return {
                transitionStart: () => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                }
              }
            }
          }
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

