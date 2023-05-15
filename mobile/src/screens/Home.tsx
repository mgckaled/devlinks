import { ImageBackground, Linking, Text, View, type ImageURISource } from "react-native"

import { Button } from "../components/Button"
import { SocialIcons } from "../components/SocialIcons"
import { UserAvatar } from "../components/UserAvatar"

import avatarImagePNG from "../assets/avatar.png"
import bgImageJPG from "../assets/bg-mobile.jpg"

export function Home() {
  return (
    <View className="flex-1">
      <ImageBackground
        className="flex-1 p-10 justify-center items-center bg-cover"
        source={bgImageJPG as ImageURISource}
      >
        <UserAvatar avatar={avatarImagePNG as ImageURISource} />
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
