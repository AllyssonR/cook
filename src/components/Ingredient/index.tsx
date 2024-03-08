import { Text, Pressable, PressableProps, Image } from "react-native"

import { style } from "./style"

export type IngredientsProps = {
  name: string
  image: string
  selected?: boolean
}

export function Ingredient({
  name,
  image,
  selected = false,
  ...rest
}: IngredientsProps & PressableProps) {
  return (
    <Pressable
      style={[style.container, selected && style.selected]}
      {...rest}
    >
      <Image source={{ uri: image }} style={style.image} />
      <Text style={style.title}>{name}</Text>
    </Pressable>
  )
}