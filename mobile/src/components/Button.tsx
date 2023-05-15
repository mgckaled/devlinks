import { StyledComponent } from "nativewind"
import { Text, TouchableOpacity, type TouchableOpacityProps } from "react-native"

interface ButtonProps extends TouchableOpacityProps {
  text: string
}

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <StyledComponent
      component={TouchableOpacity}
      {...rest}
    >
      <TouchableOpacity className="items-center justify-center h-14 mt-8 p-4 bg-surface-color rounded-lg border-solid border-2 border-stroke-color active:border-surface-color-hover">
        <Text className="text-white font-medium">{text}</Text>
      </TouchableOpacity>
    </StyledComponent>
  )
}
