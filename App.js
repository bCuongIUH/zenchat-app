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
//import addchat from "./screens/addchat";
import AddFriendsScreen from "./screens/AddFriendsScreen";


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen component={login} name="login" />
        <Stack.Screen component={register} name="register" />
        <Stack.Screen component={chatpage} name="chatpage" />
        <Stack.Screen component={friend} name="friend" />
        <Stack.Screen component={user} name="user" />
        <Stack.Screen component={inf} name="inf" />
        <Stack.Screen component={Time} name="time" />
        {/* <Stack.Screen component={confirm} name="confirm" /> */}
        <Stack.Screen component={forgotPasswordScreen} name="forgotPasswordScreen" />
        <Stack.Screen component={AddFriendsScreen} name="AddFriendsScreen" />
        {/* <Stack.Screen component={addchat} name="addchat" /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
