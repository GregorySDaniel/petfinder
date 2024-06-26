import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from '../../components/Card';

const petData = [
  {
    imageSrc: require('../../../assets/fred.png'),
    name: 'Fred',
    gender: 'macho',
    age: '7 meses',
  },
  {
    imageSrc: require('../../../assets/tonho.png'),
    name: 'Tonho',
    gender: 'macho',
    age: '2 meses',
  },
  {
    imageSrc: require('../../../assets/estrela.png'),
    name: 'Estrela',
    gender: 'fêmea',
    age: '5 meses',
  },
  {
    imageSrc: require('../../../assets/kaio.png'),
    name: 'Kaio',
    gender: 'macho',
    age: '2 meses',
  },
];

export const PetList = () => {
  const navigation = useNavigation();

  const handlePress = (pet) => {
    navigation.navigate('PetDetails', { pet });
  };

  return (
    <View style={styles.container}>
      {petData.map((pet, index) => (
        <Card
          key={index}
          imageSrc={pet.imageSrc}
          name={pet.name}
          gender={pet.gender}
          age={pet.age}
          onPress={() => handlePress(pet)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 30,
    backgroundColor: '#EFD1AA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingVertical: 50,
  },
});
