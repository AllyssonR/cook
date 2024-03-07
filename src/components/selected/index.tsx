import { theme } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { BounceOutDown, SlideInDown } from "react-native-reanimated";
import { AnimatedView } from "react-native-reanimated/lib/typescript/reanimated2/component/View";
import { Button } from "@/components/Button";
import { styles } from "./style";

type Props = {
  quantity: number;
  onClear: () => void;
  onSearch: () => void;
};

export function Selected({ onClear, onSearch, quantity }: Props) {
  return (
    <AnimatedView
      style={styles.container}
      entering={SlideInDown}
      exiting={BounceOutDown}
    >
      <View style={styles.header}>
        <Text style={styles.label}>Ingredientes selecionados</Text>
        <MaterialIcons
          name="close"
          size={24}
          onPress={onClear}
          color={theme.colors.gray_400}
        />
      </View>
      <Button title="Encontrar" onPress={onSearch} />
    </AnimatedView>
  );
}
