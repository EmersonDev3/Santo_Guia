import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const IgrejasProximas = () => {
  const churches = [
    {
      id: 6,
      name: 'Capela Mater Dolorosa Dom Barreto',
      imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNi7AhvKkSjsi6kJdzJs33rVYnfT0CwIXKX3l_T=w408-h315-k-no',
    },
    {
      id: 7,
      name: 'Paróquia de São Benedito',
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/99/74/e0/caption.jpg?w=900&h=-1&s=1',
    },
    {
      id: 8,
      name: 'Igreja Nossa Senhora Do Amparo',
      imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/ae/ea/3d/igreja-n-s-do-amparo.jpg',
    },
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
          <Text style={styles.viewAll}>Ver Tudo </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {churches.map((church, index) => (
          <View key={`${church.id}-${index}`} style={styles.card}>
            {/* Ícone de coração para favoritar */}
            <TouchableOpacity
              style={[
                styles.favoriteButton,
                favorited[church.id] && styles.favoriteButtonActive,
              ]}
              onPress={() => handleFavorite(church.id)}
            >
              <FontAwesome
                name={favorited[church.id] ? 'heart' : 'heart-o'}
                size={18}
                color={favorited[church.id] ? '#FF6347' : '#fff'}
              />
            </TouchableOpacity>
            <Image source={{ uri: church.imageUrl }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name} numberOfLines={2}>
                {church.name}
              </Text>
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
    marginLeft: 5,
  },
  viewAll: {
    fontSize: 14,
    color: '#888',
    fontWeight: '500',
  },
  scrollContainer: {
    marginTop: 20,
    width: '110%',
    marginLeft: -16,
  },
  card: {
    width: 160,
    height: 200,
    marginLeft: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
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
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
  },
});

export default IgrejasProximas;
