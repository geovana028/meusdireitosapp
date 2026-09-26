import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Drawer1 from './Drawer1';
import Drawer2 from './Drawer2';

const Drawer = createDrawerNavigator();

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <FontAwesome name="balance-scale" size={80} color="#007AFF" style={styles.icone} />

      <Text style={styles.titulo}>Meus Direitos na Prática</Text>

      <Text style={styles.texto}>
        Conheça as garantias e artigos constitucionais que protegem os seus direitos fundamentais.
      </Text>

      <TouchableOpacity
        style={styles.botaoConsultar}
        onPress={() => navigation.navigate('Drawer1')}
      >
        <FontAwesome name="search" size={18} color="#FFF" style={{ marginRight: 10 }} />
        <Text style={styles.textoBotao}>Consultar Direitos</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function BottomTabs1() {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        
        headerStyle: {
          backgroundColor: '#111c2b',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: '#ffffff',
        sceneContainerStyle: {
          backgroundColor: '#111c2b',
        },

       
        drawerStyle: {
          backgroundColor: '#111c2b', 
        },
        drawerActiveBackgroundColor: '#0f1b27', 
        drawerActiveTintColor: '#60a5fa',     
        drawerInactiveTintColor: '#ffffff',      
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Início',
        }}
      />

      <Drawer.Screen
        name="Drawer1"
        component={Drawer1}
        options={{
          title: 'Meus Direitos',
        }}
      />

      <Drawer.Screen
        name="Drawer2"
        component={Drawer2}
        options={{
          title: 'Informações Adicionais',
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111c2b',
    padding: 25,
  },
  icone: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    color: '#b0b3b8',
    textAlign: 'center',
    marginBottom: 35,
    lineHeight: 22,
  },
  botaoConsultar: {
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 12,
    elevation: 3,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});