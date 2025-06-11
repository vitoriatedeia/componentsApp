import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList } from "react-native";

// Importar styles
import { styles } from "./src/styles/styles";

export default function App() {
  const dados = [
    { id: 1, nome: "Vitória", color: "#D3B399" },
    { id: 2, nome: "Roseli", color: "#B3865D" },
    { id: 3, nome: "Kauê", color: "#997244" },
    { id: 4, nome: "Maria Gabrielle", color: "#795831" },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.color }]}>
            <Text>{item.nome}</Text>
          </View>
        )}
      />
      <StatusBar hidden />
    </View>
  );
}
