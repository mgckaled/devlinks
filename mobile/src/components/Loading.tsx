import { ActivityIndicator, View } from "react-native"

import colors from "tailwindcss/colors"

export function Loading() {
  return (
    <View className="flex-1 justify-center bg-black">
      <ActivityIndicator
        size="large"
        color={colors.white}
      />
    </View>
  )
}
