import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function ResultsContainer() {
  const navigation = useNavigation();

  const churches = [
    { name: 'Capela Mater Dolorosa Dom Barreto', image: 'https://lh5.googleusercontent.com/p/AF1QipNi7AhvKkSjsi6kJdzJs33rVYnfT0CwIXKX3l_T=w408-h315-k-no', schedules: ['10:00 AM', '3:00 PM', '7:00 PM'] },
    { name: 'Paróquia de São Benedito', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/99/74/e0/caption.jpg?w=900&h=-1&s=1', schedules: ['8:00 AM', '12:00 PM', '6:00 PM'] },
    { name: 'Igreja Nossa Senhora Do Amparo', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/ae/ea/3d/igreja-n-s-do-amparo.jpg', schedules: ['9:00 AM', '11:00 AM', '5:00 PM'] },
  ];

  const handleCardPress = (church) => {
    navigation.navigate('ChurchDetails', { church });
  };

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

      <ScrollView horizontal={true} style={styles.cardsContainer}>
        {churches.map((church, index) => (
          <TouchableOpacity key={index} onPress={() => handleCardPress(church)}>
            <View style={styles.card}>
              <Image source={{ uri: church.image }} style={styles.cardImage} />
              <Text style={styles.cardText}>{church.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#ffff' },
  dragIndicator: { width: 60, height: 6, backgroundColor: '#ccc', borderRadius: 3, alignSelf: 'center', marginBottom: 15 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 25, paddingHorizontal: 25, borderWidth: 0.8, borderColor: '#ccc', marginBottom: 10, height: 50, width: '100%', marginTop: 25 },
  icon: { marginLeft: 10 },
  searchInput: { flex: 1, fontSize: 18, color: '#333' },
  subtitle: { fontSize: 22, color: '#000', fontWeight: 'bold', marginBottom: 20, marginTop: 20 },
  cardsContainer: { flexDirection: 'row' },
  card: { width: 250, height: 150, backgroundColor: '#f4f4f4', borderRadius: 15, marginRight: 15, overflow: 'hidden' },
  cardImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  cardText: { position: 'absolute', bottom: 10, left: 10, fontSize: 16, color: '#fff', textShadowColor: 'rgba(0, 0, 0, 0.7)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 3, fontWeight: 'bold', lineHeight: 22 },
});
