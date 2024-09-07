import FontAwesome from "@expo/vector-icons/FontAwesome";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";
import { NavigationContainer } from "@react-navigation/native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GluestackUIProvider mode="light">
      <RootLayoutNav />
    </GluestackUIProvider>
  );
}

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <GluestackUIProvider mode="light">
      {/* <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}> */}
      {/* <NavigationContainer> */}
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" ,  title: 'Aviso' }} />,
        
      </Stack>
      {/* </NavigationContainer> */}

      {/* </ThemeProvider> */}
    </GluestackUIProvider>
  );
}

// function TabsScreen() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="HomeTab"
//         component={Tab1Screen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
//         }}
//       />
//       <Tab.Screen
//         name="ProfileTab"
//         component={Tab2Screen}
//         options={{
//           tabBarLabel: 'Perfil',
//           tabBarIcon: ({ color, size }) => <MaterialIcons name="person" color={color} size={size} />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
