import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Messages = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Caixa de Mensagens</Text>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>Você não tem novas mensagens.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver Mensagens Anteriores</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFD1AA',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A0B74B',
    marginBottom: 20,
  },
  messageContainer: {
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#A0B74B',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
