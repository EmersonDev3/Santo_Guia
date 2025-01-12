import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ResultsContainer() {
  const [showResults, setShowResults] = useState(false);

  const churches = [
    { name: 'Igreja Nossa Senhora ', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ae/ea/3d/igreja-n-s-do-amparo.jpg?w=600&h=500&s=1' },
    { name: 'Igreja Matriz de São Bento', image: 'https://fastly.4sqi.net/img/general/width960/44296737_m-dzY2CuxpmLYrsiCgKvXfXjZGgof36L377wKMHXGIw.jpg' },
    { name: 'Igreja Nossa Senhora da Glória', image: 'https://via.placeholder.com/250x150?text=Igreja+Nossa+Senhora+da+Glória' },
    { name: 'Igreja de São Francisco de Assis', image: 'https://via.placeholder.com/250x150?text=Igreja+de+São+Francisco+de+Assis' },
    { name: 'Igreja Nossa Senhora das Graças', image: 'https://via.placeholder.com/250x150?text=Igreja+Nossa+Senhora+das+Graças' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.dragIndicator} />

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#aaa"
        />
        <Icon name="search" size={24} color="#555" style={styles.icon} />
      </View>

      <Text style={styles.subtitle}>Resultados Próximos</Text>

      {showResults && (
        <View style={styles.resultsContainer}>
          <Text style={styles.title}>Search Results</Text>
          <Text style={styles.text}>
            Display the results based on the applied filters here!
          </Text>
        </View>
      )}

      <ScrollView horizontal={true} style={styles.cardsContainer}>
        {churches.map((church, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: church.image }} style={styles.cardImage} />
            <Text style={styles.cardText}>{church.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffff',
  },
  dragIndicator: {
    width: 60,
    height: 6,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 25,
    borderWidth: 0.8,
    borderColor: '#ccc',
    marginBottom: 10,
    height: 50,
    width: '100%',
    marginTop: 25,
  },
  icon: {
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  subtitle: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  resultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
  },
  card: {
    width: 250,
    height: 150,
    backgroundColor: '#f4f4f4',
    borderRadius: 15,
    marginRight: 15,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 16,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
