import { StyledComponent } from "nativewind"
import { Text, TouchableOpacity } from "react-native"

export function Button({ ...rest }) {
  return (
    <StyledComponent
      component={TouchableOpacity}
      {...rest}
    >
      <TouchableOpacity className="h14 bg-green-600 rounded-md items-center justify-center p-4">
        <Text className="text-white font-medium">Entrar</Text>
      </TouchableOpacity>
    </StyledComponent>
  )
}
