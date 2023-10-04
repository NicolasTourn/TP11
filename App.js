import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [numIslotes, setNumIslotes] = useState(0);

  const ContarIslotes = (frase) => {
    let count = 0;

    for (let i = 0; i < frase.length; i++) {
      const startChar = frase[i];
      let j = i + 1;

      while (j < frase.length && frase[j] !== startChar) {
        j++;
      }

      if (j < frase.length && frase[j] === startChar && j - i > 1) {
        count++;
        i = j + 1;
      }
    }

    return count;
  };

  const handleCountIslotes = () => {
    console.log('Botón presionado')
    const numIslotes = ContarIslotes(inputText);
    setNumIslotes(numIslotes);

    // Mostrar un alert con la cantidad de islotes
    Alert.alert('Resultado', `Número de islotes: ${numIslotes}`);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Ingrese una frase"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Contar Islotes" onPress={handleCountIslotes} />
    </View>
  );
}