import { Text, View, StyleSheet } from "react-native";

const usuarios = [
  {
    id: 1,
    nome: "João Vitor",
    cargo: "Aluno"
  },
  {
    id: 2,
    nome: "André",
    cargo: "Professor"
  }
];

export default function Index() {
  return (
    <View
      style={style.container}
      
      >
      {
        usuarios.map(item => (
        <Text style={}>{item.nome}</Text>
      ))
      }
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },

  itemLista: {
    width: '100%',
    padding: 10,
    marginBottom: 2,
    backgroundColor: 'blue'
  }

  textoLista: { 
    fontSize: 20
  }
})
