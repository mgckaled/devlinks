import { Inter_400Regular, Inter_500Medium, useFonts } from "@expo-google-fonts/inter"
import { SafeAreaView, StatusBar } from "react-native"

import { Loading } from "./src/components/Loading"
import { Home } from "./src/screens/Home"

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_500Medium })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <SafeAreaView className="flex-1 bg-transparent">
      <StatusBar
        barStyle={"light-content"}
        translucent
      />
      <Home />
    </SafeAreaView>
  )
}
