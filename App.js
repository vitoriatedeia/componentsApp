import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";

// Importar styles
import { styles } from "./src/styles/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
    </View>
  );
}
