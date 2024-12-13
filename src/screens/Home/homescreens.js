import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import NavbarComponent from '../../components/NavbarComponent';
import IgrejasProximas from '../../components/IgrejasProximasScroll';
import IgrejasMaisVisitadas from '../../components/IgrejasMaisVisitadas';
export default function HomeScreen() {
    const [activeButton, setActiveButton] = useState('Home');

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.rowContainer}>
                    <View style={styles.textsContainer}>
                        <Text style={styles.smallText}>Oi, Oliver CEO</Text>
                        <Text style={styles.largeText}>Explore Locations</Text>
                    </View>
                </View>
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar..."
                    placeholderTextColor="#aaa"
                />
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

            <IgrejasProximas />
            <NavbarComponent />
            <IgrejasMaisVisitadas/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 40,  // Reduzido para aproximar os elementos do topo
    },
    box: {
        alignItems: 'center',
        width: '90%',
        paddingTop: 20, // Reduzido para aproximar os elementos do topo
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    textsContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    smallText: {
        fontSize: 18,
        fontWeight: '400',
        color: '#555',
        marginBottom: 2,
    },
    largeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#222',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 15,
        paddingHorizontal: 15,
        marginTop: 20,  // Menor margem superior
        width: '90%',
        height: 50,
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
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,  // Menor margem superior
        width: '90%',
    },
    button: {
        flex: 1,  
        height: 40,
        backgroundColor: '#f9f9f9',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    activeButton: {
        backgroundColor: '#222',
        borderColor: '#444',
        borderWidth: 1,
    },
    buttonText: {
        fontSize: 14,
        color: '#333', 
        fontWeight: 'bold',
    },
    activeText: {
        color: '#fff',
    },
});
