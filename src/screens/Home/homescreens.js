import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NavbarComponent from '../../components/NavbarComponent';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.rowContainer}>
                    <View style={styles.textsContainer}>
                        <Text style={styles.smallText}>Oi, Oliver CEO</Text>
                        <Text style={styles.largeText}>Find Details</Text>
                    </View>
                    <View style={styles.circle}>
                        <Icon name="user-alt" size={20} color="#fff" />
                    </View>
                </View>
            </View>

            <View style={styles.searchContainer}>
                <Icon name="search" size={20} color="#555" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar..."
                    placeholderTextColor="#aaa"
                />
            </View>


            <NavbarComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: '#fff', // Fundo branco
        paddingTop: 50,
    },
    box: {
        alignItems: 'center',
        width: '90%',
        paddingTop: 40,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#444', // Círculo com tom mais escuro
        justifyContent: 'center',
        alignItems: 'center',
    },
    textsContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    smallText: {
        fontSize: 18,
        fontWeight: '400',
        color: '#555', // Texto pequeno em cinza escuro
        marginBottom: 1,
    },
    largeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000', // Texto principal em preto
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Fundo de busca cinza claro
        borderRadius: 30,
        paddingHorizontal: 15,
        marginTop: 20,
        width: '90%',
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        fontSize: 18,
        color: '#333', // Texto da busca em cinza escuro
    },
    rowBoxes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 30,
    },
    boxItem: {
        width: '22%', // Ajuste da largura
        height: 90, // Altura dos botões
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    boxLabel: {
        marginTop: 5,
        fontSize: 12,
        color: '#fff', // Texto branco
        textAlign: 'center',
    },
});
