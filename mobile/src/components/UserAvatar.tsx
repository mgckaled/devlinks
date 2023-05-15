import { MaterialIcons } from "@expo/vector-icons"
import { StyledComponent } from "nativewind"
import { ImageBackground, Pressable, View, type ImageURISource, type PressableProps } from "react-native"

interface UserPhotoProps extends PressableProps {
  avatar: ImageURISource
}

export function UserAvatar({ avatar, ...rest }: UserPhotoProps) {
  return (
    <StyledComponent
      component={Pressable}
      {...rest}
    >
      <View className="flex-row items-baseline mb-9">
        <ImageBackground
          source={avatar}
          className="w-36 h-36 -mr-6 items-center justify-center rounded-full bg-surface-color border-solid border-2 border-stroke-color"
        />

        <Pressable className="w-12 h-12 -ml-4 items-center justify-center rounded-full bg-surface-color active:bg-stroke-color ">
          <MaterialIcons
            name="add-a-photo"
            size={26}
            color="white"
          />
        </Pressable>
      </View>
    </StyledComponent>
  )
}
