import { StatusBar } from "expo-status-bar";
import { Text, View, Switch } from "react-native";

// Importar Hook UseState
import { useState } from "react";

// Importar styles
import { styles } from "./src/styles/styles";

export default function App() {
  const [favorites, setFavorite] = useState(false);
  const [completed, setCompleted] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtros</Text>

      <View style={styles.filter}>
        <Text style={styles.text}>Mostrar Favoritos</Text>
        <Switch
          value={favorites}
          onValueChange={() => setFavorite(!favorites)}
        />
      </View>

      <View style={styles.filter}>
        <Text style={styles.text}>Mostrar Tarefas Completadas</Text>

        <Switch
          value={completed}
          onValueChange={() => setCompleted(!completed)}
          thumbColor={completed ? "blue" : "pink"}
          trackColor={{ true: "green" }}
          ios_backgroundColor="pink"
        />
      </View>

      <Text style={{ marginTop: 10 }}>Filtros Ativos</Text>

      {favorites && (
        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "bold" }}>
          Favoritos!
        </Text>
      )}
      {completed && (
        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "bold" }}>
          Tarefas Completadas!
        </Text>
      )}

      <StatusBar hidden />
    </View>
  );
}
