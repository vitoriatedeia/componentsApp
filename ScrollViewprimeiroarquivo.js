import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";

// Importar styles
import { styles } from "./src/styles/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.box, { backgroundColor: "#D3B399" }]}>
          <Text>Primeira Caixa!</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "#B3865D" }]}>
          <Text>Segunda Caixa!</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "#997244" }]}>
          <Text>Terceira Caixa!</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "#795831" }]}>
          <Text>Quarta Caixa!</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "#5D4626" }]}>
          <Text>Quinta Caixa!</Text>
        </View>
      </ScrollView>
      <StatusBar hidden />
    </View>
  );
}
