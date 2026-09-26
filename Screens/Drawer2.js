import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

export default function Drawer2() {
  const [cardLendo, setCardLendo] = useState(null);
  const [vozFeminina, setVozFeminina] = useState(null);

 


  const card1Texto = 
    "O que são Cláusulas Pétreas? São núcleos invioláveis da Constituição Federal, Artigo 60, parágrafo 4º. Nem mesmo o Congresso ou o Presidente podem criar propostas para abolir garantias como o voto direto, secreto, universal e os direitos individuais.";

  const card2Texto = 
    "Vedação ao Retrocesso Social. É um princípio jurídico que impede o Estado de destruir ou desmantelar conquistas sociais já consolidadas, como o SUS, auxílios e direitos trabalhistas, sem colocar uma proteção equivalente ou superior no lugar.";

  const falarTexto = (id, texto) => {
    Speech.stop();
    setCardLendo(id);

    const opcoesDeVoz = {
      language: 'pt-BR',
      rate: 0.9,
      pitch: 1.1, 
      onDone: () => setCardLendo(null),
      onStopped: () => setCardLendo(null),
      onError: () => setCardLendo(null),
    };

    
    if (vozFeminina) {
      opcoesDeVoz.voice = vozFeminina;
    }

    Speech.speak(texto, opcoesDeVoz);
  };

  const pararTexto = () => {
    Speech.stop();
    setCardLendo(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.tituloHeader}>Conceitos Fundamentais</Text>

      {/* CARD 1: CLÁUSULAS PÉTREAS */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <FontAwesome name="shield" size={28} color="#007AFF" />
          <Text style={styles.cardTitulo}>O que são Cláusulas Pétreas?</Text>
        </View>

        <Text style={styles.cardTexto}>
          São núcleos invioláveis da Constituição Federal (Art. 60, § 4º). Nem mesmo o Congresso ou o Presidente podem criar propostas para abolir garantias como o voto direto, secreto, universal e os direitos individuais.
        </Text>

        <View style={styles.containerVoz}>
          {cardLendo !== 'card1' ? (
            <TouchableOpacity 
              style={styles.botaoVoz} 
              onPress={() => falarTexto('card1', card1Texto)}
            >
              <FontAwesome name="volume-up" size={16} color="#FFF" style={{ marginRight: 8 }} />
              <Text style={styles.textoBotaoVoz}>Ouvir texto</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity 
              style={[styles.botaoVoz, styles.botaoParar]} 
              onPress={pararTexto}
            >
              <FontAwesome name="stop" size={16} color="#FFF" style={{ marginRight: 8 }} />
              <Text style={styles.textoBotaoVoz}>Parar leitura</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* CARD 2: VEDAÇÃO AO RETROCESSO SOCIAL */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <FontAwesome name="line-chart" size={26} color="#007AFF" />
          <Text style={styles.cardTitulo}>Vedação ao Retrocesso Social</Text>
        </View>

        <Text style={styles.cardTexto}>
          É um princípio jurídico que impede o Estado de destruir ou desmantelar conquistas sociais já consolidadas (como o SUS, auxílios e direitos trabalhistas) sem colocar uma proteção equivalente ou superior no lugar.
        </Text>

        <View style={styles.containerVoz}>
          {cardLendo !== 'card2' ? (
            <TouchableOpacity 
              style={styles.botaoVoz} 
              onPress={() => falarTexto('card2', card2Texto)}
            >
              <FontAwesome name="volume-up" size={16} color="#FFF" style={{ marginRight: 8 }} />
              <Text style={styles.textoBotaoVoz}>Ouvir texto</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity 
              style={[styles.botaoVoz, styles.botaoParar]} 
              onPress={pararTexto}
            >
              <FontAwesome name="stop" size={16} color="#FFF" style={{ marginRight: 8 }} />
              <Text style={styles.textoBotaoVoz}>Parar leitura</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#111c2b',
    padding: 20,
  },
  tituloHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 15,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#0a1929',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    maxWidth: 350,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#3a3b3c',
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 12,
    flex: 1,
  },
  cardTexto: {
    fontSize: 14,
    color: '#b0b3b8',
    lineHeight: 22,
  },
  containerVoz: {
    marginTop: 15,
    alignItems: 'flex-start',
  },
  botaoVoz: {
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  botaoParar: {
    backgroundColor: '#E53935',
  },
  textoBotaoVoz: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
});