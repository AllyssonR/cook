import { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import { styles } from "./styles";
import { Ingredient } from "@/components/Ingredient";
import { router } from "expo-router";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState<string[]>([]);

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value));
    }
    setSelected((state) => [...state, value]);
  }
  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja Limpar tudo?", [
      { text: "não", style: "cancel" },
      { text: "sim", onPress: () => setSelected([]) },
    ]);
  }
  function handleSearch(){
    router.navigate('/recipes/'+selected)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu
      </Text>
      <Ingredient />
    </View>
  );
}
