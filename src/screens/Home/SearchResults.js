import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import ResultsContainer from  '../../components/ResultsContainer';

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
      {/* Mapa */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -5.08513,
            longitude: -42.81771,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          customMapStyle={[
            {
              featureType: 'poi',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'transit',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'road',
              elementType: 'labels.icon',
              stylers: [{ visibility: 'off' }],
            },
          ]}
        >
          {/* Marcador no SENAC com efeito pulsante */}
          <Marker
            coordinate={{
              latitude: -5.08513,
              longitude: -42.81771,
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
                  source={{
                    uri: 'https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=600',
                  }}
                  style={styles.image}
                />
              </View>
            </Animated.View>
          </Marker>

          {/* Marcadores existentes */}
          <Marker
            coordinate={{
              latitude: -5.081559100007424,
              longitude: -42.82499124236024,
            }}
            title="Localização fixa"
            description="Outro ponto de interesse"
            pinColor="red" // Ícone vermelho
          />
          <Marker
            coordinate={{
              latitude: -5.076279864645338,
              longitude: -42.818274991017304,
            }}
            title="Nova Localização"
            description="Ponto adicional"
            pinColor="red" // Ícone vermelho
          />
          <Marker
            coordinate={{
              latitude: -5.082969034062303,
              longitude: -42.820356136553414,
            }}
            title="Mais uma Localização"
            description="Outro ponto adicional"
            pinColor="red" // Ícone vermelho
          />

          {/* Novos Marcadores */}
          <Marker
            coordinate={{
              latitude: -5.090064926692901,
              longitude: -42.81578565240493,
            }}
            title="Nova Localização 1"
            description="Ponto extra"
            pinColor="red" // Ícone vermelho
          />
          <Marker
            coordinate={{
              latitude: -5.0897657038866875,
              longitude: -42.81078601483246,
            }}
            title="Nova Localização 2"
            description="Outro ponto extra"
            pinColor="red" // Ícone vermelho
          />
        </MapView>
      </View>

   
      <ResultsContainer/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    flex: 1.5,
  },
  map: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  resultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
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
