import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Altere para o pacote de ícones que preferir

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      {/* Ícones da navbar */}
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="home" size={28} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="search" size={28} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="notifications" size={28} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="person" size={28} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',  
    bottom: 0,
    left: 1,
    right: 0,
    height: 70,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    width:'100%'
    
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Navbar;
