import React,  { useState } from 'react';
import { View , Text , StyleSheet } from 'react-native';
import Botao from './components/botao/index.jsx';

export default function App() {
  const [contador , setContador] = useState(0);
  const menos = (x = 1) => setContador(contador - x);

  const mais = () => {
    setContador(anterior => {
      const novoValor = anterior + 1;
      console.log(novoValor);
      return novoValor;
    });
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Benvindo</Text>
      <Text style= {[styles.text, styles.textContador]}>{contador}</Text>
      <View style={styles.grupo}>
        <Botao title="-" onPress= {() => menos()} estilo={styles.btMenos}
        />
        <Botao title="+" onPress={() => mais()} estilo={styles.btnMais} />
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text:{
    fontSize: 20,
    color: '#333',
  },
  textContador: {
    fontWeight: 'bold',
    fontSIze: 40,
  },
  grupo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',

  },
  btnMenos: {
    backgroundColor: 'red',
  },
  btnMais: {
    backgroundColor: 'green' ,
  } ,
});





