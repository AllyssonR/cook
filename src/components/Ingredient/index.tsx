import { Image, Pressable,PressableProps, Text } from "react-native";
import { style } from "./style";

export type IngredientsProps={
  name:string
  image:string
  selected?:boolean
}
export function Ingredient({name,image,selected=false,...rest}:IngredientsProps & PressableProps) {
  return (
    <Pressable style={style.container}{...rest} >
      <Image source={require(image)} style={style.image} />
      <Text>{name}</Text>
    </Pressable>
  );
}
