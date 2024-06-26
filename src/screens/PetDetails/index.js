import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';

export const PetDetails = ({ route }) => {
  const { pet } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={pet.imageSrc} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{pet.name}</Text>
        <View style={styles.genderAgeContainer}>
          <Text style={styles.genderAge}>{`${pet.gender}, ${pet.age}`}</Text>
        </View>
        <Text style={styles.shelter}>Abrigado em:</Text>
        <Text style={styles.shelterName}>ONG ANJOS DE PATAS</Text>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>Aceita crianças</Text>
          <Text style={styles.iconText}>Aceita outros animais</Text>
          <Text style={styles.iconText}>Tem bastante energia, precisa de passeios</Text>
          <Text style={styles.iconText}>Precisa de mais espaço</Text>
        </View>
        <TouchableOpacity style={styles.contactButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.contactButtonText}>Entrar em Contato</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Número da ONG: (99) 99999-9999</Text>
            <Button title="Fechar" onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>
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
  image: {
    width: '90%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    width: '90%',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  genderAgeContainer: {
    backgroundColor: '#A0B74B',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
  },
  genderAge: {
    fontSize: 16,
    color: '#fff',
  },
  shelter: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  shelterName: {
    fontSize: 16,
    marginBottom: 10,
  },
  iconContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  iconText: {
    fontSize: 16,
    marginVertical: 2,
  },
  contactButton: {
    backgroundColor: '#A0B74B',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  contactButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
});
