import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function SearchResults() {
  
  const [scale] = useState(new Animated.Value(1));

  useEffect(() => {
    
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2, 
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1, 
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scale]);

  return (
    <View style={styles.container}>
    
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -5.0905,
            longitude: -42.8043,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
    
          <Marker
            coordinate={{
              latitude: -5.0905, 
              longitude: -42.8043, 
            }}
            title="Senac Campos Sales"
            description="Av. Campos Sales, 1111 - Centro, Teresina - PI"
          >
        
            <Animated.View
              style={[
                styles.pulsingCircle,
                { transform: [{ scale }] }, 
              ]}
            >
              <View style={styles.iconContainer}>
            
                <Image
                  source={{ uri: 'https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=600' }} // Substitua pelo URL ou caminho local da sua imagem
                  style={styles.image}
                />
              </View>
            </Animated.View>
    
          </Marker>
        </MapView>
      </View>

      {/* Resultados ocupando a outra metade */}
      <View style={styles.resultsContainer}>
        <Text style={styles.title}>Search Results</Text>
        <Text style={styles.text}>
          Display the results based on the applied filters here!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    mapContainer: {
      flex: 1,
    },
    map: {
      width: Dimensions.get('window').width,
      height: '100%',
    },
    resultsContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
      padding: 20,
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
    pulsingCircle: {
      width: 50,
      height: 50,
      
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      
        },
    iconContainer: {
      width: 40,
      height: 40,
      backgroundColor: 'white', 
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 30, 
      height: 30, 
      borderRadius: 15, 
    },
  });
  