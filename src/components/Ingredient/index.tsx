import { Image, Pressable, Text } from "react-native";
import { styles } from "./style";
export function Ingredient() {
  return (
    <Pressable style={styles.container}>
      <Image source={require("@assets/tomato.png")} style={styles.image} />
      <Text>Maça</Text>
    </Pressable>
  );
}
