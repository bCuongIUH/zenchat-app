import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "./screens/login";
import register from "./screens/register";
import chatpage from "./screens/chatpage";
import friend from "./screens/friend"
import user from "./screens/user"
import inf from "./screens/inf"
import Time from "./screens/time";
import forgotPasswordScreen from "./screens/forgotPasswordScreen";


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login2"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen component={login} name="login2" />
        <Stack.Screen component={register} name="register2" />
        <Stack.Screen component={chatpage} name="chatpage" />
        <Stack.Screen component={friend} name="friend" />
        <Stack.Screen component={user} name="user" />
        <Stack.Screen component={inf} name="inf" />
        <Stack.Screen component={Time} name="time" />
        {/* <Stack.Screen component={confirm} name="confirm" /> */}
        <Stack.Screen component={forgotPasswordScreen} name="forgotPasswordScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
