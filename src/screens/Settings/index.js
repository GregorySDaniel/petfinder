import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Alterar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Notificações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Privacidade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Sair</Text>
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
  settingsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  settingButton: {
    backgroundColor: '#A0B74B',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  settingButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});
