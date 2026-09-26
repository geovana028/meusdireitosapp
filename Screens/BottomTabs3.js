import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function BottomTabs3() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.containerFoto}>
          <Image
            source={require('../assets/geo.jpg')}
            style={styles.foto}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.nome}>Geovana Barbosa</Text>
        <Text style={styles.subtitulo}>Desenvolvedora do App</Text>

        {/* Informações de Matrícula e Disciplina */}
        <View style={styles.infoContainer}>
          <Text style={styles.rotuloInfo}>DISCIPLINA</Text>
          <Text style={styles.textoInfo}>Desenvolvimento de Aplicativos</Text>

          <Text style={styles.rotuloInfo}>MATRÍCULA / RA</Text>
          <Text style={styles.textoInfo}>20241BG.INF_I0028</Text> 
        </View>

        <Text style={styles.rotuloObjetivo}>OBJETIVO DO APLICATIVO</Text>

        <Text style={styles.descricaoObjetivo}>
          Informar a população que seus direitos fundamentais são protegidos pela Constituição Federal e imunes a cancelamentos arbitrários.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d1b29',
    padding: 20,
  },
  card: {
    backgroundColor: '#0e253d',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignItems: 'center',
    width: '100%',
    maxWidth: 350,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  containerFoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#007AFF',
    overflow: 'hidden',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foto: {
    width: '100%',
    height: '100%',
    transform: [
      { translateX: 0 },
      { translateY: 5 },
      { scale: 1.1 }
    ],
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: '#b0b3b8',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#071f36',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  rotuloInfo: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#007AFF',
    letterSpacing: 1,
    marginTop: 4,
    marginBottom: 2,
    textAlign: 'center',
  },
  textoInfo: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 6,
  },
  rotuloObjetivo: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#007AFF',
    letterSpacing: 1,
    marginBottom: 8,
    textAlign: 'center',
  },
  descricaoObjetivo: {
    fontSize: 14,
    color: '#e4e6eb',
    textAlign: 'center',
    lineHeight: 20,
  },
});