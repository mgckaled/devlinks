import { AntDesign, Ionicons } from "@expo/vector-icons"
import { StyledComponent } from "nativewind"
import { Linking, Pressable, View } from "react-native"

export function SocialIcons({ ...rest }) {
  return (
    <StyledComponent
      component={Pressable}
      {...rest}
    >
      <View className="flex-row justify-between items-center gap-x-7 mt-10">
        <Pressable
          className="w-16 h-16 items-center justify-center rounded-full bg-surface-color active:bg-highlight-color"
          onPress={() => {
            void Linking.openURL("https://reactnative.dev/")
          }}
        >
          <Ionicons
            name="logo-react"
            size={36}
            color="white"
          />
        </Pressable>
        <Pressable
          className="w-16 h-16  items-center justify-center rounded-full bg-surface-color active:bg-highlight-color"
          onPress={() => {
            void Linking.openURL("https://github.com/")
          }}
        >
          <AntDesign
            name="github"
            size={36}
            color="white"
          />
        </Pressable>
        <Pressable
          className="w-16 h-16 items-center justify-center rounded-full bg-surface-color active:bg-highlight-color"
          onPress={() => {
            void Linking.openURL("https://twitter.com/rocketseat")
          }}
        >
          <AntDesign
            name="twitter"
            size={36}
            color="white"
          />
        </Pressable>
        <Pressable
          className="w-16 h-16 items-center justify-center rounded-full bg-surface-color active:bg-highlight-color"
          onPress={() => {
            void Linking.openURL("https://www.youtube.com/@rocketseat")
          }}
        >
          <AntDesign
            name="youtube"
            size={36}
            color="white"
          />
        </Pressable>
      </View>
    </StyledComponent>
  )
}
