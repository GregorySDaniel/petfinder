import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StyledButton } from '../../components/Button'
import UserImage from '../../../assets/user.png';
import DogImage from '../../../assets/dog.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export const Main = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.profile}>
        <Image style={styles.userImg} source={UserImage}/>
        <Text style={styles.titleText}>Fulano da Silva</Text>
      </View>

      <View style={styles.buttons}>
        <StyledButton onPress={() => navigation.navigate('PetList')} icon={<Icon name="paw" size={30} color="#A0B74B"/>} label="Encontre o seu melhor amigo"/>
        <StyledButton onPress={() => navigation.navigate('Messages')} icon={<Icon name="wechat" size={28} color="#A0B74B"/>} label="Caixa de mensagens"/>
        <StyledButton onPress={() => navigation.navigate('Settings')} icon={<Icon name="cog" size={30} color="#A0B74B"/>} label="Configurações"/>
      </View>

      <View style={styles.banner}>
        <Image style={styles.dogImg} source={DogImage}/>
      </View>

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#EFD1AA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImg: {
    height: 124,
    width: 124,
    borderRadius: 100,
    borderColor: '#A0B74B',
    borderWidth: 5,
  },
  titleText: {
    fontFamily: 'sans-serif',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#A0B74B'
  },
  profile: {
    flexDirection: 'column',
    flex: 2,
    width: '100%',
    alignItems: 'center',
    gap: 10,
    padding: 30,
    marginTop: 10,
  },
  
  buttons: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    padding: 30,
  },

  banner: {
    flex: 3,
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },

  dogImg: {
    width: 500,
    height: 400,
    opacity: 0.7
  }
});
