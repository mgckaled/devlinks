/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ImageBackground, Linking, Text, View } from "react-native"

import { Button } from "../components/Button"
import { SocialIcons } from "../components/SocialIcons"


export function Home() {
  return (
    <View className="flex-1">
      <ImageBackground
        className="flex-1 p-10 justify-center items-center bg-cover"
        source={require("../assets/bg/bg-mobile.jpg")}
      >
        <Text className="font-medium text-white text-xl leading-6 mt-2">@mgckaled</Text>
        <Button
          className="w-full"
          text="Conheça a Rocketseat"
          onPress={() => {
            void Linking.openURL("https://www.rocketseat.com.br/")
          }}
        />
        <Button
          className="w-full"
          text="Ver meus repositórios"
          onPress={() => {
            void Linking.openURL("https://www.rocketseat.com.br/")
          }}
        />
        <Button
          className="w-full"
          text="Ver meu perfil no Github"
          onPress={() => {
            void Linking.openURL("https://github.com/mgckaled")
          }}
        />
        <SocialIcons />
      </ImageBackground>
    </View>
  )
}
