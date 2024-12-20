import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const IgrejasDestaques = () => {
  const churches = [
    { 
      id: 1, 
      name: 'Igreja São João', 
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/9a/64/a8/caption.jpg?w=500&h=400&s=1',
      address: 'Rua das Flores, 123 - Centro, São Paulo, SP',
      distance: '1.5 km',
    },
    { 
      id: 2, 
      name: 'Igreja Santa Rita', 
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/68/63/86/fachada-da-catedral-de.jpg?w=500&h=400&s=1',
      address: 'Av. Central, 456 - Jardim Paulista, São Paulo, SP',
      distance: '2.3 km',
    },
    { 
      id: 3, 
      name: 'Igreja Cristo Rei', 
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/46/bf/21/igreja-de-nossa-senhora.jpg?w=500&h=400&s=1',
      address: 'Praça da Fé, 789 - Bela Vista, São Paulo, SP',
      distance: '3.0 km',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Destaques</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>Ver Tudo</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {churches.map((church) => (
          <View key={church.id} style={styles.card}>
            <Image source={{ uri: church.imageUrl }} style={styles.image} />
            
            <View style={styles.details}>
              <Text style={styles.churchName}>{church.name}</Text>
              <Text style={styles.address}>{church.address}</Text>
              <View style={styles.distanceContainer}>
                <FontAwesome name="map-marker" size={20} color="red" />
                <Text style={styles.distance}>{church.distance}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    width: '100%',
    alignSelf: 'center',
    marginBottom: 22,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginLeft:5
  },
  viewAll: {
    fontSize: 14,
    color: '#888',
    fontWeight: '500',
  },
  scrollContainer: {
    marginTop: 15,
    width: '110%',
    marginLeft: -16,
  },
  card: {
    width: 300,
    marginRight:35,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginLeft: 15,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  details: {
    marginLeft: 15,
    justifyContent: 'space-between',
    flex: 1,
    maxHeight: 120,
  },
  churchName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  address: {
    fontSize: 14,
    color: '#444',
    marginTop: 5,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  distance: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
});

export default IgrejasDestaques;
