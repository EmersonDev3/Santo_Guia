import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 

const IgrejasProximas = () => {
  const churches = [
    { id: 1, imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/99/74/df/caption.jpg?w=900&h=-1&s=1', address: 'Rua 1, Bairro A', likes: 150 },
    { id: 2, imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/99/74/e0/caption.jpg?w=900&h=-1&s=1', address: 'Rua 2, Bairro B', likes: 200 },
    { id: 3, imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/99/74/df/caption.jpg?w=900&h=-1&s=1', address: 'Rua 3, Bairro C', likes: 120 },
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
        <Text style={styles.title}>Destaques</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {churches.map((church) => (
          <View key={church.id} style={styles.card}>
            <TouchableOpacity
              style={[styles.favoriteButton, favorited[church.id] && styles.favoriteButtonActive]}
              onPress={() => handleFavorite(church.id)}
            >
              <FontAwesome
                name={favorited[church.id] ? 'heart' : 'heart-o'}
                size={30}
                color={favorited[church.id] ? '#FF6347' : '#fff'}
                style={styles.favoriteIcon}
              />
            </TouchableOpacity>
            <Image source={{ uri: church.imageUrl }} style={styles.image} />
            <View style={styles.infoContainer}>
              <View style={styles.likesContainer}>
                <FontAwesome
                  name="heart"
                  size={20}
                  color="#FF6347"
                />
                <Text style={styles.likesText}>{church.likes}</Text>
              </View>
              <Text style={styles.address}>{church.address}</Text>
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
      width: '95%',
      alignSelf: 'center',
      marginBottom: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    title: {
      fontSize: 24,
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
      width: '100%',
    },
    card: {
      width: 220,
      height: 280, 
      marginRight: 20,
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
    likesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    likesText: {
      marginLeft: 5,
      fontSize: 14,
      fontWeight: '500',
      color: '#FF6347',
    },
    address: {
      fontSize: 12,
      fontWeight: '400',
      color: '#fff',
    },
  });
export default IgrejasProximas;
