import { Stack } from "expo-router";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    
    <Stack>  
      <Stack.Screen name="index" options={{title:'Home', statusBarColor :'black'}} />
    </Stack>
  );
}
