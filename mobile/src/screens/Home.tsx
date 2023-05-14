/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
import { ImageBackground, Text, View, type ImageSourcePropType } from "react-native"

import { Button } from "../components/Button"

const myBackgroundImage: ImageSourcePropType = require("../assets/bg/bg-mobile.jpg")

export function Home() {
  return (
    <View className="flex-1">
      <ImageBackground
        className="flex-1 p-10 justify-center items-center"
        source={myBackgroundImage}
      >
        <Text className="font-regular text-white">Hello DevLinks with NativeWind</Text>
        <Button className="w-full mt-8" />
      </ImageBackground>
    </View>
  )
}
