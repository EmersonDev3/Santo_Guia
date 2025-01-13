import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Timelinescroll from './Timelinescroll'; // Importe o componente aqui

export default function ChurchDetails({ navigation }) {
  const daysOfWeek = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Horários</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="ellipsis-vertical" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Bottom section aligned to the left */}
      <View style={styles.bottomSection}>
        <Text style={styles.dateText}>13 Jan 2025</Text>
        <TouchableOpacity style={styles.iconDownContainer}>
          <Icon name="chevron-down" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Additional text */}
      <Text style={styles.resultsText}>Você tem 3 horários encontrados</Text>

      {/* Scroll horizontal with 7 cards */}
      <ScrollView 
        horizontal={true} 
        style={styles.scrollContainer} 
        showsHorizontalScrollIndicator={false}
      >
        {daysOfWeek.map((day, index) => (
          <View 
            key={index} 
            style={[
              styles.card, 
              index === 0 ? styles.cardActive : styles.cardInactive
            ]}
          >
            <Text style={[styles.cardNumber, index !== 0 && styles.cardNumberInactive]}>
              {13 + index}
            </Text>
            <Text style={[styles.cardText, index !== 0 && styles.cardTextInactive]}>
              {day}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Timeline text */}
      <Text style={styles.timelineText}>Timeline</Text>

      {/* Chama o componente Timelinescroll aqui */}
      <Timelinescroll />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#ffffff' 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: StatusBar.currentHeight || 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  bottomSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    paddingLeft: 30, 
  },
  dateText: {
    fontSize: 20,
    color: '#000',
    marginRight: 10,
  },
  iconContainer: {
    borderWidth: 0.5, 
    borderColor: '#ddd', 
    borderRadius: 15, 
    padding: 6, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconDownContainer: {
    
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultsText: {
    fontSize: 14,
    color: '#888', 
    marginTop: 10,
    paddingLeft: 30,
  },
  scrollContainer: {
    marginTop: 20, 
    paddingLeft: 30, 
    height: 100,
    maxHeight: 120, 
  },
  card: {
    width: 85, 
    height: 105, 
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10, 
  },
  cardActive: {
    backgroundColor: '#000', 
  },
  cardInactive: {
    backgroundColor: '#f5f5f5',
  },
  cardNumber: {
    fontSize: 20,  
    color: '#fff', 
  },
  cardNumberInactive: {
    color: '#cdcdcd', 
  },
  cardText: {
    fontSize: 13,  
    color: '#fff',
  },
  cardTextInactive: {
    color: '#c9c1c1', 
  },
  timelineText: {
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#000', 
    marginTop: 20, 
    paddingLeft: 30, 
  },
});
