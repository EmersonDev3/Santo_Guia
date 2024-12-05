import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function NavbarComponent() {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.navItem}>
                <Icon name="home" size={24} color="#444" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Icon name="search" size={24} color="#444" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Icon name="heart" size={24} color="#444" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Icon name="bell" size={24} color="#444" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Icon name="user-alt" size={24} color="#444" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f9f9f9', // Tom de branco suave
        height: 70,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 20, // Bordas arredondadas no topo
        borderTopRightRadius: 20,
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5, // Sombras para Android
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
});