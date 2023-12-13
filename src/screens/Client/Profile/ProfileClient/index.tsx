// ProfileScreen.tsx
import React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather';


const ProfileClient: React.FC = () => {
  
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.container}>
    <View style={styles.Header}>
    <View style={styles.profileHeader}>
        <Image style={styles.profileImage} source={require('../../../../../assets/profile.png')}  />
        <Text style={styles.userName}>Nome do Usuário</Text>
    </View>
    </View>
    
        

      <Text style={styles.anamnesisTitle}>Anamnese</Text>

      <View>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Base Pressed')}>
          <Text style={styles.buttonText}>Base</Text>
                  <Icon name="chevron-right" size={30} color="black" style={styles.icon1}/>

        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Unha Pressed')}>
          <Text style={styles.buttonText}>Cabelo</Text>
          <Icon name="chevron-right" size={30} color="black" style={styles.icon2}/>

        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Unha Pressed')}>
          <Text style={styles.buttonText}>Unha</Text>
          <Icon name="chevron-right" size={30} color="black" style={styles.icon3}/>

        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Sobrancelha Pressed')}>
          <Text style={styles.buttonText}>Sobrancelha</Text>
          <Icon name="chevron-right" size={30} color="black" style={styles.icon4}/>

        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Cílios Pressed')}>
          <Text style={styles.buttonText}>Cílios</Text>
          <Icon name="chevron-right" size={30} color="black" style={styles.icon5} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Maquiagem Pressed')}>
          <Text style={styles.buttonText}>Maquiagem</Text>
          <Icon name="chevron-right" size={30} color="black" style={styles.icon6}/>
        </TouchableOpacity>
      </View>
           
    </View>
    </ScrollView>
    
    
  );
};

export default ProfileClient;

