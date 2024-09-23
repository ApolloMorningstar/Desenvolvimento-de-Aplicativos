import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Button, Image, TouchableOpacity } from "react-native";

const App = () => {
  const [tarefas, setTarefas] = useState([
    { id: '1', title: 'Hambúrguer', completed: false, image: require('../appContext/pasta imagens/hamburguer.png') },
    { id: '2', title: 'Pizza', completed: false, image: require('../appContext/pasta imagens/pizza.png') },
    { id: '3', title: 'Hot Dog', completed: false, image: require('../appContext/pasta imagens/hotdog.png') },
    { id: '4', title: 'Açaí', completed: false, image: require('../appContext/pasta imagens/acai.png') },
  ]);

  const marcarConcluida = (id) => {
    setTarefas(tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, completed: true };
      } else {
        return tarefa;
      }
    }));
  };
  
  const marcarPendente = (id) => {
    setTarefas(tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, completed: false };
      } else {
        return tarefa;
      }
    }));
  };

  const renderizarTarefa = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={[styles.itemText, item.completed && styles.completedText]}>
          {item.title}
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.completedButton]} 
            onPress={() => marcarConcluida(item.id)}
          >
            <Text style={styles.buttonText}>Concluído</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.pendingButton]} 
            onPress={() => marcarPendente(item.id)}
          >
            <Text style={styles.buttonText}>Pendente</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../appContext/pasta imagens/menu.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>iFome doppelganger</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../appContext/pasta imagens/cart.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        renderItem={renderizarTarefa}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#EA1D2C',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  iconButton: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 25,
  },
  completedButton: {
    backgroundColor: '#4CAF50',
  },
  pendingButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
});

export default App;
