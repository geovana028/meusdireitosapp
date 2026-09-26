import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  FlatList,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const listaDireitos = [
  {
    id: '1',
    categoria: 'DIREITO POLÍTICO',
    dica: 'O Congresso pode anular o voto feminino?',
    resposta:
      'Jamais! O voto universal, direto e secreto é uma Cláusula Pétrea (Art. 60, § 4º) e um direito fundamental de igualdade. Nenhuma emenda ou lei pode ser criada para cassar ou restringir o direito de voto das mulheres.',
  },
  {
    id: '2',
    categoria: 'GARANTIA SOCIAL',
    dica: 'O Estado pode extinguir totalmente os auxílios sociais, como o BPC e a previdência?',
    resposta:
      'Não mesmo, nem por Emenda Constitucional (PEC)! O STF entende que o direito à previdência e à assistência social funciona como uma Cláusula Pétrea da nossa Constituição, pois esses benefícios protegem o Mínimo Existencial e a dignidade humana.',
  },
  {
    id: '3',
    categoria: 'DIREITOS ADQUIRIDOS',
    dica: 'Uma nova lei pode tirar direitos que foram adquiridos por movimentos sociais?',
    resposta:
      'Não! A Constituição protege o Direito Adquirido e proíbe leis que retroagem para destruir direitos individuais. Além disso, pelo Princípio da Vedação ao Retrocesso Social, o Estado também não pode criar leis futuras que destruam os direitos e as conquistas que a sociedade levou décadas para alcançar. '
  },
  {
    id: '4',
    categoria: 'DIREITO TRABALHISTA',
    dica: 'O empregador pode impor uma escala de trabalho de 7x0 e pagar os funcionários com comida?',
    resposta:
      'De jeito nenhum! O salário mínimo em dinheiro e o repouso semanal remunerado são Cláusulas Pétreas da Constituição (Art. 7º). Pelo Princípio da Vedação ao Retrocesso Social, nenhuma nova lei ou Emenda pode retirar essas garantias básicas. Práticas assim violam a dignidade humana e configuram trabalho análogo à escravidão.',
  },
  {
    id: '5',
    categoria: 'SAÚDE PÚBLICA',
    dica: 'O Estado pode acabar com a gratuidade do SUS?',
    resposta:
      'Não! O direito à saúde pública e universal é um direito social fundamental. O Estado não pode extinguir a rede pública gratuita nem retirar o acesso básico da população.',
  },
];

function FlipCard({ item }) {
  const [virado, setVirado] = useState(false);
  const animacao = useRef(new Animated.Value(0)).current;

  const virarCard = () => {
    Animated.spring(animacao, {
      toValue: virado ? 0 : 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
    setVirado(!virado);
  };

  const frenteRoda = animacao.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const trasRoda = animacao.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={virarCard} style={styles.cardWrapper}>
      <View>
       
        <Animated.View style={[styles.card, { transform: [{ rotateY: frenteRoda }] }]}>
          <FontAwesome name="balance-scale" size={50} color="#007AFF" style={styles.icone} />
          <Text style={styles.categoria}>{item.categoria}</Text>
          <Text style={styles.dica}>{item.dica}</Text>
          <View style={styles.rodapeAcao}>
            <Text style={styles.textoToque}>Toque para ver a resposta</Text>
            <FontAwesome name="refresh" size={14} color="#007AFF" />
          </View>
        </Animated.View>

        <Animated.View style={[styles.card, styles.cardTras, { transform: [{ rotateY: trasRoda }] }]}>
          <FontAwesome name="gavel" size={40} color="#007AFF" style={styles.icone} />
          <Text style={styles.textoResposta}>{item.resposta}</Text>
          <View style={styles.rodapeAcao}>
            <Text style={styles.textoToque}>Toque para voltar</Text>
            <FontAwesome name="refresh" size={14} color="#007AFF" />
          </View>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
}

export default function Drawer1() {
  return (
    <View style={styles.container}>
      <Text style={styles.instrucao}>Deslize para o lado para explorar os direitos</Text>

      <FlatList
        data={listaDireitos}
        renderItem={({ item }) => <FlipCard item={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.flatListStyle}
        contentContainerStyle={styles.conteudoFlatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0a1929', // Cor de fundo total combinada
    paddingVertical: 20,
  },
  instrucao: {
    fontSize: 14,
    color: '#b0b3b8',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '500',
  },
  flatListStyle: {
    flex: 1,
    backgroundColor: '#111c2b', // Garante que o fundo da caixa/lista combine
  },
  conteudoFlatList: {
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#111c2b',
  },
  cardWrapper: {
    marginRight: 20,
  },
  card: {
    width: 280,
    height: 380,
    backgroundColor: '#0f1b27',
    borderRadius: 20,
    padding: 22,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#071f36',
    elevation: 4,
    backfaceVisibility: 'hidden',
  },
  cardTras: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#0f1b27',
  },
  icone: {
    marginTop: 10,
  },
  categoria: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#007AFF',
    letterSpacing: 1,
  },
  dica: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 22,
    fontWeight: '500',
  },
  textoResposta: {
    fontSize: 13,
    color: '#b0b3b8',
    textAlign: 'center',
    lineHeight: 20,
  },
  rodapeAcao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  textoToque: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '600',
    marginRight: 6,
  },
});