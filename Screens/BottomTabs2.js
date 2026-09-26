import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DIREITOS = [
  { id: '1', tema: 'DIREITO POLÍTICO', artigo: 'Art. 60, § 4º (Cláusula Pétrea)' },
  { id: '2', tema: 'GARANTIA SOCIAL', artigo: 'Vedação ao Retrocesso Social' },
  { id: '3', tema: 'DIREITOS ADQUIRIDOS', artigo: 'Art. 5º, XXXVI (Direito Adquirido)' },
  { id: '4', tema: 'DIREITO TRABALHISTA', artigo: 'Art. 7º (Direitos dos Trabalhadores)' },
  { id: '5', tema: 'SAÚDE PÚBLICA', artigo: 'Art. 6º e Art. 196 (SUS)' },
];

export default function BottomTabs2() {
  const renderItem = ({ item }) => (
    // Substituído TouchableOpacity por View para ser apenas um Card estático
    <View style={styles.card}>
      <FontAwesome name="balance-scale" size={32} color="#007AFF" style={styles.icone} />
      <Text style={styles.textoCodigo}>Cód: {item.id}</Text>
      <Text style={styles.textoTema}>Tema: {item.tema}</Text>
      <Text style={styles.textoArtigo}>{item.artigo}</Text>
    </View>
  );

  return (
    <View style={styles.containerTela}>
      <FlatList
        data={DIREITOS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.flatListStyle}
        contentContainerStyle={styles.containerLista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // 1. FUNDO DA TELA INTEIRA
  containerTela: {
    flex: 1,
    backgroundColor: '#111c2b',
  },

  // 2. COR DA FLATLIST
  flatListStyle: {
    flex: 1,
    backgroundColor: '#111c2b',
  },

  // 3. CONTEÚDO DA LISTA
  containerLista: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#111c2b',
  },

  // 4. CARD ESTÁTICO
  card: {
    backgroundColor: '#0f1b27', // Cor de fundo do card
    borderRadius: 16,
    padding: 16,
    marginRight: 15,
    width: 170,
    minHeight: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#071f36',
  },

  icone: {
    marginBottom: 8,
  },
  textoCodigo: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  textoTema: {
    color: '#b0b3b8',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  textoArtigo: {
    color: '#007AFF',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});