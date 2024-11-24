import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';

const { width } = Dimensions.get('window');


const slides = [
   {
       id: '1',
       title: 'Bem-vindo ao Santo Guia',
       description: 'Encontre a paz e a orientação que você procura',
       image: require('../../assets/slide1.png'),
   },
   {
       id: '2',
       title: 'Encontre Sua Igreja',
       description: 'Descubra igrejas próximas para orações, confissões e momentos de fé',
       image: require('../../assets/slide2.png'),
   },
   {
       id: '3',
       title: 'Fortaleça sua fé',
       description: 'Participe de atividades e eventos que vão renovar sua espiritualidade',
       image: require('../../assets/slide3.png'),
   },
];


export default function IntroScreen({ navigation }) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const flatListRef = useRef(null);


   const handleScrollEnd = (event) => {
       const index = Math.round(event.nativeEvent.contentOffset.x / width);
       setCurrentIndex(index);
   };


   const navigateToHome = () => {
       navigation.replace('LoginScreen');
   };


   const handleNext = () => {
       if (currentIndex < slides.length - 1) {
           const nextIndex = currentIndex + 1;
           setCurrentIndex(nextIndex);
           flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
       } else {
           navigateToHome();
       }
   };


   const handleSkip = () => {
       navigateToHome();
   };


   return (
       <View style={styles.container}>
           <FlatList
               ref={flatListRef}
               data={slides}
               horizontal
               pagingEnabled
               showsHorizontalScrollIndicator={false}
               onMomentumScrollEnd={handleScrollEnd}
               renderItem={({ item }) => (
                   <View style={styles.slide}>
                       <Image source={item.image} style={styles.image} />
                       <Text style={styles.title}>{item.title}</Text>
                       <Text style={styles.description}>{item.description}</Text>
                   </View>
               )}
               keyExtractor={(item) => item.id}
           />
          
           <View style={styles.footer}>
               <View style={styles.pagination}>
                   {slides.map((_, index) => (
                       <View
                           key={index}
                           style={[
                               styles.dot,
                               { backgroundColor: index === currentIndex ? '#000' : '#ddd' },
                           ]}
                       />
                   ))}
               </View>


               <View style={styles.buttonContainer}>
                   <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                       <Text style={styles.skipText}>Skip</Text>
                   </TouchableOpacity>


                   {currentIndex === slides.length - 1 ? (
                       <TouchableOpacity style={styles.button} onPress={navigateToHome}>
                           <Text style={styles.buttonText}>Começar</Text>
                       </TouchableOpacity>
                   ) : (
                       <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                           <Text style={styles.nextText}>Next</Text>
                       </TouchableOpacity>
                   )}
               </View>
           </View>
       </View>
   );
}


const styles = StyleSheet.create({
   container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
   slide: {
       width,
       justifyContent: 'center',
       alignItems: 'center',
       padding: 20,
       marginTop: -60,
   },
   title: {
       fontSize: 26,
       fontWeight: 'bold',
       color: '#333',
       marginBottom: 10,
       textAlign: 'center'
   },
   description: {
       fontSize: 18,
       color: '#666',
       textAlign: 'center',
       marginHorizontal: 20
   },
   footer: {
       position: 'absolute',
       bottom: 50,
       width: '100%',
       paddingHorizontal: 20,
       alignItems: 'center'
   },
   pagination: {
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       marginBottom: 15,
   },
   dot: {
       width: 6,
       height: 6,
       borderRadius: 3,
       marginHorizontal: 5,
       backgroundColor: '#333',
       opacity: 0.5,
   },
   buttonContainer: {
       flexDirection: 'column',
       width: '100%',
       justifyContent: 'center',
       alignItems: 'center'
   },
   button: {
       backgroundColor: '#000',
       paddingHorizontal: 60,
       paddingVertical: 14,
       borderRadius: 10,
       width: '95%',
       alignItems: 'center',
   },
   buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
   nextButton: {
       backgroundColor: '#000',
       paddingHorizontal: 60,
       paddingVertical: 14,
       borderRadius: 10,
       width: '95%',
       alignItems: 'center',
   },
   nextText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
   skipButton: {
       position: 'absolute',
       top: -680,
       right: 10,
       zIndex: 10,
   },
   skipText: { fontSize: 16, color: '#000' },
   image: {
       width: 250,
       height: 250,
       marginTop: -30,
   },
});


