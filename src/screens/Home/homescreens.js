import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
    const [activeButton, setActiveButton] = useState('Home');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textsContainer}>
                    <Text style={styles.largeText}>Explore Locations</Text>
                </View>
                <ImageBackground
                    source={{ uri: 'https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                    style={styles.profileIcon}
                    imageStyle={styles.profileImage}
                >
                </ImageBackground>
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar..."
                    placeholderTextColor="#aaa"
                />
                <Icon name="search" size={20} color="#aaa" style={styles.searchIcon} />
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={[styles.button, activeButton === 'Home' && styles.activeButton]}
                    onPress={() => setActiveButton('Home')}
                >
                    <Text style={[styles.buttonText, activeButton === 'Home' && styles.activeText]}>
                        Home
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, activeButton === 'Liturgia' && styles.activeButton]}
                    onPress={() => setActiveButton('Liturgia')}
                >
                    <Text style={[styles.buttonText, activeButton === 'Liturgia' && styles.activeText]}>
                        Liturgia
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, activeButton === 'Eventos' && styles.activeButton]}
                    onPress={() => setActiveButton('Eventos')}
                >
                    <Text style={[styles.buttonText, activeButton === 'Eventos' && styles.activeText]}>
                        Eventos
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, activeButton === 'Favoritos' && styles.activeButton]}
                    onPress={() => setActiveButton('Favoritos')}
                >
                    <Text style={[styles.buttonText, activeButton === 'Favoritos' && styles.activeText]}>
                        Favoritos
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    textsContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    largeText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#222',
        marginLeft:10
    },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 50 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: 15,
        paddingHorizontal: 15,
        height: 50,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        fontSize: 18,
        color: '#333',
    },
    searchIcon: {
        marginLeft: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    button: {
        width: '22%',
        height: 40,
        backgroundColor: '#f9f9f9',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        elevation: 0,
    },
    activeButton: {
        backgroundColor: '#222',
        borderColor: '#444',
        borderWidth: 1,
        elevation: 2,
    },
    buttonText: {
        fontSize: 14,
        color: '#B0B0B0',
        fontWeight: 'bold',
    },
    activeText: {
        color: '#fff',
    },
});
