import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 

const IgrejasProximas = () => {
  const churches = [
    { id: 1, name: 'Igreja São João', imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/99/74/df/caption.jpg?w=900&h=-1&s=1', distance: 150 },
    { id: 2, name: 'Igreja Santa Rita', imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/99/74/e0/caption.jpg?w=900&h=-1&s=1', distance: 200 },
    { id: 3, name: 'Igreja Cristo Rei', imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/99/74/df/caption.jpg?w=900&h=-1&s=1', distance: 120 },
    { id: 3, name: 'Igreja Cristo Rei', imageUrl: 'https://www.civitatis.com/blog/wp-content/uploads/2021/03/Capela-Dourada-Recife-768x577.jpg', distance: 120 },
    { id: 3, name: 'Igreja Cristo Rei', imageUrl: 'https://www.civitatis.com/blog/wp-content/uploads/2021/03/Igreja-Matriz-de-Nossa-Senhora-do-Pilar-Ouro-Preto-768x512.jpg', distance: 120 },
    { id: 3, name: 'Igreja Cristo Rei', imageUrl: 'https://www.civitatis.com/blog/wp-content/uploads/2021/03/Igreja-Nossa-Senhora-do-O-Sabara-768x511.jpg', distance: 120 },
  ];

  const [favorited, setFavorited] = useState({});

  const handleFavorite = (id) => {
    setFavorited((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Igrejas Próximas</Text>
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
            {/* Ícone de coração para favoritar */}
            <TouchableOpacity
              style={[styles.favoriteButton, favorited[church.id] && styles.favoriteButtonActive]}
              onPress={() => handleFavorite(church.id)}
            >
              <FontAwesome
                name={favorited[church.id] ? 'heart' : 'heart-o'}
                size={22}  // Tamanho reduzido
                color={favorited[church.id] ? '#FF6347' : '#fff'}
              />
            </TouchableOpacity>
            <Image source={{ uri: church.imageUrl }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{church.name}</Text>
              <View style={styles.distanceContainer}>
                <FontAwesome
                  name="map-marker"
                  size={18}
                  color="#FF6347"
                />
                <Text style={styles.distanceText}>{church.distance} m</Text>
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
    padding: 16,
    backgroundColor: '#fff',
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
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
    color: '#333',
  },
  viewAll: {
    fontSize: 14,
    color: '#888',
    fontWeight: '500',
  },
  scrollContainer: {
    marginTop: 20,
    width: '110%',
    marginLeft: -16,   // Ajusta a margem para a esquerda para mover o scrollContainer
  },
  card: {
    width: 180,
    height: 230,
    marginRight: 10,
    marginLeft: 20,   // Adiciona margem à esquerda para mover as cards para a direita
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    position: 'relative',
    backgroundColor: '#fff',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    padding: 5,
    borderRadius: 50,
  },
  favoriteButtonActive: {},
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    resizeMode: 'cover',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  distanceText: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
});


export default IgrejasProximas;
